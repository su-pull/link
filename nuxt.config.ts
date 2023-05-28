export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  srcDir: 'src/',
  css: ['~/assets/styles/main.scss'],
  modules: ['@vueuse/motion/nuxt']
})
