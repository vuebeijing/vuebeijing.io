import * as iconSet from './utils/icons'

export default {
  target: 'static',
  head: {
    title: 'Vue Beijing • 北京',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vue Beijing official website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' }
    ]
  },
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@chakra-ui/nuxt',
    '@nuxtjs/emotion',
    '@nuxtjs/pwa'
  ],
  pwa: {
    meta: {
      name: 'Vue Beijing'
    }
  },
  chakra: {
    icons: {
      iconPack: 'fa',
      iconSet
    },
    extendTheme: {
      fonts: {
        body: '\'Inter\', sans-serif;',
        heading: '\'Inter\', sans-serif;'
      }
    }
  }
}
