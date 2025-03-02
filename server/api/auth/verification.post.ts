import * as yup from 'yup'
import token from '~/lib/token'
import prisma from '~/lib/prisma'

const schema = yup.object({
    token: yup.string().required('Verification token not found.')
})

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const email = await token.resolve(body.token)

    if (!email) {
        return {
            success: false,
            message: 'Verification token not valid.'
        }
    }

    await prisma.user.create({
        data: {
            email
        }
    })

    return {
        success: true,
        message: 'Your account has been successfully verified.'
    }
})
