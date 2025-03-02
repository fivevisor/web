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
        [
            '@nuxtjs/google-fonts',
            {
                families: {
                    Saira: '100..900'
                }
            }
        ],
        '@nuxt/icon',
        '@vee-validate/nuxt'
    ],
    css: ['~/assets/css/main.css']
})
