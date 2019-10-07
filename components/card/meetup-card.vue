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
        <div class="text-gray-900 font-bold text-xl mb-2">Vue的服务器端渲染 | Intro to Vue SSR</div>
        <p class="text-gray-700 text-base">
          Join us as Anne introduces Server-Side Rendering with Vue in an action-packed workshop.
        </p>
        <p class="text-gray-700 text-base">加入我们! 前端工程师李燕伦带大家一起实现一个Vue的服务器端渲染项目。</p>
      </div>
      <div class="flex items-center">
        <a
          href="http://www.huodongxing.com/event/1498482658100?td=4002984597203"
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none inline-flex items-center"
          target="__blank"
        >
          <icon-base width="20" height="20" class="mr-2" :icon-name="'user-plus'">
            <icon-user-plus />
          </icon-base>
          <span>Register | 报名</span>
        </a>
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
