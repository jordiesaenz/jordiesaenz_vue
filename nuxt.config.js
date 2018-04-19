module.exports = {
  modulesDir: ['node_modules'],
  css: [
    '@/assets/stylesheets/application.scss'
  ],
  sassLoader: {
    includePaths: [
      require('path').resolve(__dirname, 'node_modules')
    ]
  },
  modules: [
    '@nuxtjs/blog'
  ],
  plugins: [
    '~/plugins/vue-image',
    '~/plugins/vue-youtube'
  ],
  head: {
    title: 'Jordie Saenz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#3B8070' },
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue|mp3)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
