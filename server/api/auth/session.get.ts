export default defineEventHandler(async (event) => {
    if (!event.context.session) {
        return {
            success: true,
            message: 'Session not found.'
        }
    }

    return {
        success: true,
        message: 'Session was successfully found.',
        data: event.context.session
    }
})
