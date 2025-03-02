export default defineEventHandler(async (event) => {
    setCookie(event, 'session_token', '', {
        path: '/',
        maxAge: 0
    })

    return {
        success: true,
        message: 'Logout process was completed successfully.'
    }
})
