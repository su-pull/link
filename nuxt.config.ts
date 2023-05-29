export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  srcDir: 'src/',
  css: ['~/assets/styles/main.scss', '~/assets/styles/mobile.scss'],
  modules: ['@nuxt/content', '@vueuse/motion/nuxt'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  content: {
    highlight: {
      theme: 'github-dark-dimmed'
    }
  }
})
