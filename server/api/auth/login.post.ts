import * as yup from 'yup'
import prisma from '~/lib/prisma'
import token from '~/lib/token'

const schema = yup.object({
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

    const existingUser = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })

    if (!existingUser) {
        return {
            success: false,
            message: 'E-mail address not exist.'
        }
    }

    const redirectToken = await token.generate(
        'Redirect',
        {
            email: body.email
        },
        '5m'
    )

    const { emails } = useResend()

    await emails.send({
        from: 'Fivevisor <noreply@fivevisor.com>',
        to: body.email,
        subject: 'Login Your Account',
        text: `${
            getRequestURL(event).origin
        }/auth/redirect?token=${redirectToken}`
    })

    return {
        success: true,
        message: 'Login process started, check your e-mail address to complete.'
    }
})
