// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
        '@nuxt/eslint',
        '@nuxtjs/tailwindcss',
        [
            '@nuxt/fonts',
            {
                families: [{ name: 'Saira', provider: 'google' }]
            }
        ],
        '@nuxt/icon',
        [
            '@nuxt/image',
            {
                provider: 'ipx'
            }
        ]
    ],
    css: ['~/assets/css/main.css']
})
