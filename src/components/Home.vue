<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Vue is coming...</h2>
    <a href="https://vuejs.org/v2/guide/">Get Started with Vue</a>
  </div>
</template>

<script lang="js">
  export default {
    name: 'Home',
    data () {
      return {
        msg: 'Welcome to the VueJS Beijing Meetup!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../scss/pages/home.scss';
</style>
