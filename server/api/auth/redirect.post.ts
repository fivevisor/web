import * as yup from 'yup'
import token from '~/lib/token'
import prisma from '~/lib/prisma'

const schema = yup.object({
    token: yup.string().required('Redirect token not found.')
})

export default defineEventHandler(async (event) => {
    if (event.context.session) {
        return {
            success: false,
            message: 'Already have an active session.'
        }
    }

    const body = await readBody(event)
    const bodyValidation = await schema
        .validate(body)
        .then(() => ({ valid: true }))
        .catch((err) => ({ valid: false, errors: err.errors }))

    if (!bodyValidation.valid && 'errors' in bodyValidation) {
        return {
            success: false,
            message: bodyValidation.errors.join(' ')
        }
    }

    const decoded = await token.resolve(body.token)

    if (!decoded) {
        return {
            success: false,
            message: 'Redirect token not valid.'
        }
    }

    const existingUser = await prisma.user.findUnique({
        where: {
            email: decoded.email
        }
    })

    if (!existingUser) {
        return {
            success: false,
            message: 'E-mail address not exist.'
        }
    }

    const sessionToken = await token.generate(
        'Session',
        {
            email: decoded.email
        },
        '7d'
    )

    setCookie(event, 'session_token', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/'
    })

    return {
        success: true,
        message: 'Login process was completed successfully.'
    }
})
