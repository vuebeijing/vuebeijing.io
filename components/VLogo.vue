<template>
  <c-flex v-bind="$attrs" align-items="center" flex-wrap="nowrap">
    <svg height="30px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 147.29 127.04"><defs><linearGradient
    id="a"
    x1="54.98"
    y1="-37.33"
    x2="124.23"
    y2="101.18"
    gradientUnits="userSpaceOnUse"
  ><stop offset="0" stop-color="#f1ed46" /><stop offset="1" stop-color="#b37f23" /></linearGradient><linearGradient
    id="b"
    x1="61.53"
    y1="-23.02"
    x2="106.28"
    y2="63.29"
    gradientUnits="userSpaceOnUse"
  ><stop offset="0" stop-color="#ce1d21" /><stop offset="1" stop-color="#690a17" /></linearGradient></defs><title>vue-beijing-logo</title><path d="M117.83,0h29.46L73.64,127,0,0H56.34l17.3,29.46L90.58,0Z" fill="#41b883" /><path d="M0,0,73.64,127,147.29,0H117.83L73.64,76.22,29.09,0Z" fill="url(#a)" /><path d="M29.09,0,73.64,76.59,117.83,0H90.58L73.64,29.46,56.34,0Z" fill="url(#b)" /></svg>
  <c-text
    color="white"
    ml="3"
    font-size="2xl"
    white-space="nowrap"
    font-weight="bold"
    text-transform="uppercase"
  >
    Vue Beijing • 北京
  </c-text>
  </c-flex>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>
