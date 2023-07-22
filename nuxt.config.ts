// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/fonts.css'
  ],
  app: {
    head: {
      links: [
        { rel: 'stylesheet', href: '/assets/css/main.css' },
        { rel: 'stylesheet', href: '/assets/css/fonts.css' },
      ]
    }
  }
})