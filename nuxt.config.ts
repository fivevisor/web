// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    app: {
        head: {
            titleTemplate: 'Fivevisor - %s'
        }
    },
    modules: [
      '@nuxtjs/tailwindcss',
      '@vee-validate/nuxt',
      '@nuxt/icon',
      '@prisma/nuxt',
      'nuxt-cron',
      'nuxt-resend'
    ],
    css: ['~/assets/css/main.css']
})