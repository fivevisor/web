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

    const { sendMail } = useNodeMailer()

    await sendMail({
        subject: 'Login Your Account',
        text: `${
            getRequestURL(event).origin
        }/auth/redirect?token=${redirectToken}`,
        to: body.email
    })

    return {
        success: true,
        message: 'Login process started, check your e-mail address to complete.'
    }
})
