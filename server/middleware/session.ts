import token from '~/lib/token'
import prisma from '~/lib/prisma'
import type { User } from '@prisma/client'

declare module 'h3' {
    interface H3EventContext {
        session: null | User
    }
}

export default defineEventHandler(async (event) => {
    const sessionToken = getCookie(event, 'session_token')

    if (sessionToken) {
        const decoded = await token.resolve(sessionToken)

        if (decoded) {
            const user = await prisma.user.findUnique({
                where: { email: decoded.email }
            })

            if (user) {
                event.context.session = user
            }
        }
    }
})
