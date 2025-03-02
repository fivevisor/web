import { defineCronHandler } from '#nuxt/cron'
import prisma from '~/lib/prisma'

export default defineCronHandler('hourly', async () => {
    await prisma.token.deleteMany({
        where: {
            expiresAt: { lt: new Date() }
        }
    })
})
