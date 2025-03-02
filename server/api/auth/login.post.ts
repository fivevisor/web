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
    const body = await readBody(event)

    const user = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })

    if (!user) {
        return {
            success: false,
            message: 'E-mail address not exist.'
        }
    }

    const redirectToken = await token.generate('Redirect', body.email, '5m')

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
