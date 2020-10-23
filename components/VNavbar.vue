<template>
  <c-box as="nav" bg="transparent" color="yellow.300" z-index="1">
    <c-flex p="5" max-w="80rem" mx="auto" align="center">
      <v-logo height="30px" />
      <c-box
        align="center"
        mr="auto"
        width="100%"
        ml="5"
        :d="['none', 'none', 'flex']"
      >
        <v-nav-content
          w="full"
          align="center"
          spacing="6"
          is-inline
        />
      </c-box>
      <v-mobile-nav ml="auto" :d="['flex', 'flex', 'none']" />
    </c-flex>
  </c-box>
</template>
