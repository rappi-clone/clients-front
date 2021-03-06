
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',

    '@nuxtjs/auth',

    '@nuxtjs/toast'
  ],

  /*
  ** Auth module configuration
  ** See https://auth.nuxtjs.org
  */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: { url: (process.env.API_URL || 'http://localhost:3001')+'/login', method: 'post', propertyName: 'token' },
          logout: false,
          user: { url: (process.env.API_URL || 'http://localhost:3001')+'/users', method: 'get', propertyName: 'user' }
        },
        // tokenRequired: true,
        // tokenType: 'bearer'
      },
      tokenType: 'bearer'
    }
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    vendor: ['axios']
  },

  router: {
    middleware: ['auth']
  },

  env: {
    apiUrl: process.env.API_URL || 'http://localhost:3001',
    bucketUrl: process.env.BUCKET_URL || 'https://storage.googleapis.com/rappi-clone/'
  }
}
