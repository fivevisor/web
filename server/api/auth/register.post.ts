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
    const body = await readBody(event)

    const user = await prisma.user.findUnique({
        where: { email: body.email }
    })

    if (user) {
        return {
            success: false,
            message: 'E-mail address already exist.'
        }
    }

    const verificationToken = await token.generate(
        'Verification',
        body.email,
        '30m'
    )

    const { sendMail } = useNodeMailer()

    await sendMail({
        subject: 'Verify Your Account',
        text: `${
            getRequestURL(event).origin
        }/auth/verification?token=${verificationToken}`,
        to: body.email
    })

    return {
        success: true,
        message:
            'Registration successful, check your email address to verify your account.'
    }
})
