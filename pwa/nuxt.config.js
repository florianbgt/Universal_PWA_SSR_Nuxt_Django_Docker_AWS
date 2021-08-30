export default {
  head: {
    title: 'pwa',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  watchers: {
    webpack: {
      poll: true
    }
  },

  css: ["~/assets/main.css"],

  plugins: [
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxtjs/pwa',
  ],

  router: {
    middleware: ["auth"],
  },

  axios: {
    progress: true,
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL
    }
  },

  auth: {
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'access',
        },
        refreshToken: {
          property: 'refresh',
          data: 'refresh',
        },
        user: {
          property: false,
        },
        endpoints: {
          login: { url: '/token/', method: 'post' },
          refresh: { url: '/token/refresh/', method: 'post' },
          user: { url: '/user/', method: 'get' },
          logout: false
        },
      }
    },
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/'
    },
  },

  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  build: {
  }
}
