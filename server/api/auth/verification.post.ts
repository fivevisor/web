import * as yup from 'yup'
import token from '~/lib/token'
import prisma from '~/lib/prisma'

const schema = yup.object({
    token: yup.string().required('Verification token not found.')
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

    const decoded = await token.resolve<{
        username: string
        email: string
    }>(body.token)

    if (!decoded) {
        return {
            success: false,
            message: 'Verification token not valid.'
        }
    }

    const existingUser = await prisma.user.findFirst({
        where: {
            OR: [{ username: decoded.username }, { email: decoded.email }]
        }
    })

    if (existingUser) {
        if (body.username === existingUser.username) {
            return {
                success: false,
                message: 'Username already exist.'
            }
        } else if (body.email === existingUser.email) {
            return {
                success: false,
                message: 'E-mail address already exist.'
            }
        }
    }

    await prisma.user.create({
        data: {
            username: decoded.username,
            email: decoded.email
        }
    })

    return {
        success: true,
        message: 'Your account has been successfully verified.'
    }
})
