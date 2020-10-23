<template>
  <div class="container">
    <c-theme-provider>
      <c-color-mode-provider>
        <c-box as="main" bg="gray.900" min-h="100vh">
          <c-reset />
          <v-navbar />
          <nuxt />
        </c-box>
      </c-color-mode-provider>
    </c-theme-provider>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
