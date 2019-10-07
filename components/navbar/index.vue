<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" class="brand" :to="{ path: localePath('/') }">
        <img
          src="@/assets/images/logo/red-gold-logo-png.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
        {{ $t('navbar.vue-beijing') }}
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#">
        About Us
      </b-navbar-item>
      <b-navbar-item href="#">
        Volunteer
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#">
          Team
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Meetups</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.brand {
  font-weight:700;
}
</style>
