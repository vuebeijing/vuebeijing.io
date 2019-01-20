<template>
  <div id="app">
    <img class="home__logo" src="./assets/logos/red-gold-logo.png">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss">
  html {
    height: 100%;
  }

  body {
    background: #2a2a3a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    color: white;
    height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;

    // margin-top: 60px;

    h1 {
      font-weight: 700
    }
  }

  .home__logo {
    width: 300px;
  }
</style>
