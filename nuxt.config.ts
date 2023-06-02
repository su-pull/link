export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  srcDir: 'src/',
  css: ['~/assets/styles/main.scss', '~/assets/styles/mobile.scss'],
  modules: ['@nuxt/content'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  content: {
    highlight: {
      theme: 'github-dark-dimmed'
    },
    markdown: {
      anchorLinks: false
    }
  }
})
