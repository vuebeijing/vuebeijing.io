<template>
  <section class="pb-32">
    <div class="jumbo relative pt-12">
      <navbar class="z-10" />
      <div class="hero-wrapper">
        <div class="w-full bg-gray-900 absolute hero">
          <div class="hero-bg absolute" />
        </div>
        <div class="hero-content flex text-white relative">
          <div class="hero-img w-2/5 relative">
            <img class="shadow-xl team-img absolute bottom-0 right-0" src="@/assets/images/meetup-picture-hero.png" alt="" srcset="">
            <img src="@/assets/images/logo/red-gold-logo-image.png" class=" absolute w-48 left-0 top-0">
          </div>
          <div class="flex flex-col w-3/5 justify-center text-right hero-text p-5">
            <h1 class="font-bold text-5xl">Vue Beijing</h1>
            <p class="text-lg">Beijing's Point of Vue.</p>
            <p class="text-lg">The Official Vue.js meetup of Beijing.</p>
          </div>
        </div>
      </div>
    </div>
    <section class="px-20">
      <h1 class="text-4xl text-center font-bold my-3">Upcoming Meetups</h1>
      <div class="flex flex-col items-center">
        <meetup-card />
      </div>
    </section>
  </section>
</template>

<script>
import Navbar from '@/components/navbar/navbar.vue'
import MeetupCard from '@/components/card/meetup-card.vue'

export default {
  components: {
    Navbar,
    MeetupCard

  }
}
</script>

<style lang="scss">

.jumbo {
  height: 600px;
}

html {
  font-size: 17px;
}

.hero {
  height: 600px;
  transform: skewY(5deg);
  top: -20px;
  bottom: 20px;
  width: 100%;
  overflow: hidden;

  .hero-bg {
    background: url('/slides-bg.jpg') center no-repeat;
    background-size: cover;
    top: 70px;
    bottom: -70px;
    transform: skewY(-5deg);
    width: 100%;
  }
}

.hero-content {
  padding: 70px;
}

.hero-img {
  height: 250px;
}

.team-img {
  width: 275px;
}

.transition-ease-in {
  transition: all 0.2s ease-in;
}
</style>
