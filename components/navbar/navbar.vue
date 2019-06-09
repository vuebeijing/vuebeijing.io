<template>
  <nav id="global-navbar" class="fixed flex h-12 px-8 bg-gray-100 shadow-xl inset-x-0 top-0 w-screen justify-center items-center">
    <!-- Navbar Logo -->
    <a id="akkadu-logo-brand" href="/" class="flex font-bold">
      <img src="@/assets/images/logo/red-gold-logo-image.png" alt="Vue Beijing" class="nav-logo">
      <h1 class="text-lg ml-2">Vue Beijing | Vue北京聚会</h1>
    </a>

    <!-- Navbar Dropdown Toggler -->
    <button id="navbar-menu-toggle" class="ml-auto hidden xs:block" @click.stop="toggleNavbarMenu()">
      <div id="navbar-toggle-icon" class="navbar__toggle__burger">
        <img class="nav-toggle" src="@/assets/icons/navigation-icons/hamburger-icon-dark.svg" alt="menu_dropdown_icon" srcset="">
      </div>
    </button>

    <!-- Navigation List Items -->
    <ul v-click-outside="hideMenu" :class="{ mobile__list__open : displayList }" class="flex h-full absolute items-center sm:relative ml-auto">
      <li class="h-full hover:bg-gray-300 transition-ease-in" @click="toggleDisplayMenu()">
        <a class="p-3 flex items-center" href="#">
          <span>Meetup</span>
        </a>
      </li>
      <li class="h-full hover:bg-gray-300 transition-ease-in" @click="toggleDisplayMenu()">
        <a class="p-3 flex items-center" href="#">
          <span>Posts</span>
        </a>
      </li>
      <li class="h-full hover:bg-gray-300 transition-ease-in" @click="toggleDisplayMenu()">
        <a class="p-3 flex items-center" href="#">
          <span>Talks</span>
        </a>
      </li>
      <li class="h-full hover:bg-gray-300 transition-ease-in" @click="toggleDisplayMenu()">
        <a class="p-3 flex items-center" href="#">
          <span>Contact</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="js">
import navMixin from '@/mixins/navbar.mixin'

export default {
  name: 'Navbar',
  mixins: [navMixin],
  props: {
    placeholder: {
      default: 'Search For Event',
      type: String
    },
    create: {
      default: 'Create Event',
      type: String
    }
  },
  methods: {
  }
}
</script>

<style lang="css">
.nav-toggle {
  width: 20px;
}

.nav-logo {
  height: 20px;
}

.transition-ease-in {
  transition: all 0.2s ease-in;
}
</style>
