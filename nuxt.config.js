export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Antoine Lemaire',
    htmlAttrs: {
      lang: 'en',
      'data-theme': 'dark',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#11191f' },
      { name: 'theme-color', content: '#11191f' },
    ],
    link: [
      { rel: 'icon', type: 'image/png', size: '32x32', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', size: '16x16', href: '/favicons/favicon-16x16.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', size: '180x180', href: '/favicons/apple-touch-icon.png' },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/app.scss',
    { src: '@picocss/pico/css/pico.css', lang: 'css' },
    { src: 'github-calendar/dist/github-calendar-responsive.css', lang: 'css' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/fontawesome.js',
    // { src: '~/node_modules/github-calendar/dist/github-calendar.min.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // i18n module options
  i18n: {
    preload: ['en', 'fr'],
    locales: [
      {
        code: 'en',
        file: 'en.js',
        name: 'English',
        emoji: '🇬🇧',
      },
      {
        code: 'fr',
        file: 'fr.js',
        name: 'Français',
        emoji: '🇫🇷',
      },
    ],
    defaultLocale: 'fr',
    langDir: 'lang/',

    strategy: 'prefix_except_default',

    vueI18n: {
      fallbackLocale: 'en',
    },
  },

  fontawesome: {
    icons: {
      // solid: ['faCircleHalfStroke'],
      // regular: ['faCircleHalfStroke'],
    },
  },
};
