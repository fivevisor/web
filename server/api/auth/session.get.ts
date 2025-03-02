import token from '~/lib/token'
import prisma from '~/lib/prisma'

export default defineEventHandler(async (event) => {
    const sessionToken = getCookie(event, 'session_token')

    if (!sessionToken) {
        return {
            success: false,
            message: 'Session token not found.'
        }
    }

    const email = await token.resolve(sessionToken)

    if (!email) {
        return {
            success: false,
            message: 'Session token not valid.'
        }
    }

    const user = await prisma.user.findUnique({
        where: { email }
    })

    return {
        success: true,
        message: 'Session was successfully found.',
        data: user
    }
})
