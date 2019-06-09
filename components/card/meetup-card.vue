<template>
  <div class="max-w-sm w-4/5 lg:max-w-full lg:flex">
    <div
      class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      style="background-image: url('/poster.jpg')"
      title="Woman holding a mug"
    />
    <div
      class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">Testing Vue Applications with Jest - 23/06/2019</div>
        <p class="text-gray-700 text-base">
          Anne shares with the Beijing Meetup this month about how to plan and test
          your Vue applications.
        </p>
        <p class="text-gray-700 text-base">Jonathan talks about using Cypress for End to End testing.</p>
      </div>
      <div class="flex items-center">
        <button
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none inline-flex items-center"
        >
          <icon-base width="20" height="20" class="mr-2" :icon-name="'user-plus'">
            <icon-user-plus />
          </icon-base>
          <span>Register</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import IconBase from '@/components/icons/icon-base.vue'
import IconUserPlus from '@/components/icons/icon-user-plus.vue'

export default {
  name: 'MeetupCard',
  components: {
    IconBase,
    IconUserPlus
  }
}
</script>
