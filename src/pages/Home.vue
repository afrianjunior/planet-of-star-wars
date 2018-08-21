<template>
  <div class="container">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ msg }}
          </h1>
        </div>
      </div>
    </section>

    <div v-if="planets.status === 'fetching'">
      Fetching..
    </div>

    <div v-if="planets.status === 'error'">
      Something error, please check your internet
    </div>

    <div class="cards" v-if="planets.status === 'fetched'">
      <div
        class="card"
        v-for="planet in planets.items"
        :key="planet.name">
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://vignette.wikia.nocookie.net/starwars/images/4/4e/PurplePlanet-FT.jpg/revision/latest?cb=20100113135842" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">{{ planet.name }}</p>
              <p class="subtitle is-6">{{ planet.population }} population</p>
            </div>
          </div>

          <div class="content">
            {{ planet.terrain }}
            <br>
            <span>{{ planet.diameter }} Diameter</span>
          </div>
        </div>
      </div>
    </div>
    <pagination
       v-if="planets.status === 'fetched'"
      :next="planets.pagination.next"
      :prev="planets.pagination.previous"
      :count="planets.pagination.count"
      @fetch="fetchPlanets"
      count-title="planets"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Pagination from '../components/Pagination.vue'
export default {
  data() {
    return {
      msg: "Welcome to the planets of Star Wars",
      process: {
        fetchPlanets: {
          status: 'standby'
        }
      }
    };
  },
  computed: {
    ...mapGetters([
      'planets'
    ])
  },
  mounted () {
    this.fetchPlanets()
  },
  methods: {
    fetchPlanets (url = 'planets') {
      this.$store.dispatch('FETCH_PLANETS', url)
    }
  },
  components: {
    Pagination
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  .cards 
    margin-top: 40px

  .card
    padding: .3em .5em
</style>
