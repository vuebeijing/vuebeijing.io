<template>
  <c-stack v-bind="$attrs">
    <c-flex ml="auto">
      <c-link :_hover="{ textDecor: 'none' }" href="tel:+8615510170074">
        Contact
      </c-link>
    </c-flex>
  </c-stack>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>
