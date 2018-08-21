<template>
  <div class="pagination">
    <div class="paginationInfo" v-if="count">
      {{ count }} {{ countTitle }}
    </div>
    <div class="paginationItems">
      <div
        class="paginationItem"
        @click="handleFetch(prev)"
        v-if="prev">
        Prev
      </div>
      <div
        class="paginationItem"
        @click="handleFetch(next)"
        v-if="next">
        Next
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pagination",
  props: ["next", "count", "countTitle", "prev"],
  methods: {
    handleFetch (url) {
      this.$emit('fetch', url)
    }
  }
}
</script>

<style lang="sass">
  .pagination 
    margin-top: 30px
    font-size: 12px

  .paginationItem 
    display: inline-block
    padding: .3em .5em
    margin: 0 10px
    background-color: rgba(0, 0, 0, 0.4)
    border-radius: 4px
    color: #fff
    cursor: pointer

  .paginationInfo 
    display: block
    margin-bottom: 10px
    color: grey
</style>


