import { keywords } from "./static";

export default {
  ssr: false,
  head: {
    title: 'Dapatkan MBA! 100% online, 100% di tangan anda!',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'keywords', content: keywords },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },
  css: ['@/assets/css/main.css', 'aos/dist/aos.css'],
  plugins: ['~/plugins/smooth-scroll.js', '~/plugins/mdi.js'],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxt/postcss8'],
  modules: ['nuxt-i18n'],
  i18n: {
    locales: ['ms', 'en'],
    defaultLocale: 'ms',
    vueI18n: {
      fallbackLocale: 'ms',
      messages: {
        ms: require('./locales/ms.json'),
        en: require('./locales/en.json')
      }
    },
    strategy: 'no_prefix', // Set strategy to 'no_prefix' - url fixed
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  /**
  buildDir: 'nuxt-dist',
   */
}
