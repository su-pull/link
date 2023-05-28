export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  srcDir: 'src/',
  css: ['~/assets/styles/main.scss', '~/assets/styles/mobile.scss'],
  modules: ['@vueuse/motion/nuxt']
})
