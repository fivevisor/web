export default defineEventHandler(async (event) => {
    if (!event.context.session) {
        return {
            success: false,
            message: 'No active session found.'
        }
    }

    setCookie(event, 'session_token', '', {
        path: '/',
        maxAge: 0
    })

    return {
        success: true,
        message: 'Logout process was completed successfully.'
    }
})
