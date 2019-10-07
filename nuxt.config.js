
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Vue Beijing',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS
  css: [
    '~/scss/_buefy.scss',
    '~/scss/_fonts.scss'
  ],

  // Plugins
  plugins: [
    'plugins/icons'
  ],

  // Modules
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    'nuxt-buefy',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            file: 'en.js',
            iso: 'en',
            name: 'English'
          },
          {
            code: 'zh',
            file: 'zh.js',
            iso: 'zh',
            name: '中文'
          }
        ],
        defaultLocale: 'en',
        lazy: true,
        langDir: 'i18n/lang/',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected'
        }
      }
    ],
    '@nuxtjs/eslint-module',
    ['nuxt-buefy', {
      css: false,
      materialDesignIcons: false,
      defaultIconComponent: 'vue-fontawesome',
      defaultIconPack: 'fas'
    }],
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      'scss/_variables.scss',
      'scss/_utils.scss'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
