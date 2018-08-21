<template>
  <div id="app">
    <router-view></router-view>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          write by <a href="https://github.com/afrianjunior" target="_blank">Afrian Junior</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="sass">
@import 'bulma/bulma.sass'

.footer
  margin-top: 60px;
</style>
