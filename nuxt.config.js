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
      { rel: 'preload', hid: 'font-Bold', href: '/fonts/Sora-Bold.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', hid: 'font-Light', href: '/fonts/Sora-Light.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { rel: 'preload', hid: 'font-Regular', href: '/fonts/Sora-Regular.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' }
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
  css: [
    'css/global.css'
  ],
  chakra: {
    icons: {
      iconPack: 'fa',
      iconSet
    },
    extendTheme: {
      fonts: {
        body: '\'Sora\', sans-serif;',
        heading: '\'Sora\', sans-serif;'
      }
    }
  }
}
