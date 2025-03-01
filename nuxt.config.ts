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
        [
            'nuxt-nodemailer',
            {
                service: 'Gmail',
                auth: {
                    user: 'yigitgurses2019@gmail.com',
                    pass: 'yfkc lhzk juoy urej'
                }
            }
        ],
        'nuxt-cron'
    ],
    css: ['~/assets/css/main.css']
})
