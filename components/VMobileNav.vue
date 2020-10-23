<template>
  <c-box v-bind="$attrs">
    <c-icon-button
      :_hover="{ bg: 'whiteAlpha.50' }"
      bg="none"
      color="yellow.400"
      :icon="isOpen ? 'close' : 'bars'"
      :aria-label="`${isOpen ? 'Close' : 'Open'} nav menu`"
      @click="isOpen = !isOpen"
    />
    <c-drawer :is-open="isOpen" size="full" placement="right" :on-close="close">
      <c-drawer-overlay />
      <c-drawer-content bg="gray.900">
        <c-drawer-body color="yellow.400" pt="5">
          <c-drawer-close-button :_hover="{ bg: 'whiteAlpha.50' }" />
          <v-logo />
          <v-nav-content mt="8" spacing="8" />
        </c-drawer-body>
      </c-drawer-content>
    </c-drawer>
  </c-box>
</template>

<script>
export default {
  inheritAttrs: false,
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    close () {
      this.isOpen = false
    }
  }
}
</script>
