import * as yup from 'yup'
import prisma from '~/lib/prisma'
import token from '~/lib/token'

const schema = yup.object({
    username: yup
        .string()
        .required('Username not found.')
        .min(4, 'Username must be at least 4 characters.'),
    email: yup
        .string()
        .required('E-mail address not found.')
        .email('E-mail address not valid.')
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

    const existingUser = await prisma.user.findFirst({
        where: {
            OR: [{ username: body.username }, { email: body.email }]
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

    const verificationToken = await token.generate(
        'Verification',
        {
            username: body.username,
            email: body.email
        },
        '30m'
    )

    const { emails } = useResend()

    await emails.send({
        from: 'Fivevisor <noreply@fivevisor.com>',
        to: body.email,
        subject: 'Verify Your Account',
        text: `${
            getRequestURL(event).origin
        }/auth/verification?token=${verificationToken}`
    })

    return {
        success: true,
        message:
            'Registration successful, check your email address to verify your account.'
    }
})
