import * as yup from 'yup'
import token from '~/lib/token'

const schema = yup.object({
    token: yup.string().required('Redirect token not found.')
})

export default defineEventHandler(async (event) => {
    const body = await readBody(event)

    const email = await token.resolve(body.token)

    if (!email) {
        return {
            success: false,
            message: 'Redirect token not valid.'
        }
    }

    const sessionToken = await token.generate('Session', email, '7d')

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
