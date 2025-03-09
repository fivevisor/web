import type { User } from '@prisma/client'

interface ResponseType<T = any> {
    success: boolean
    message: string
    data?: T
}

export default () => {
    const toast = useToast()

    const register = async (
        username: string,
        email: string
    ): Promise<boolean> => {
        try {
            const response = await $fetch<ResponseType>('/api/auth/register', {
                method: 'POST',
                body: {
                    username,
                    email
                }
            })

            if (response.success) {
                toast.add({
                    type: 'success',
                    message: response.message,
                    duration: 3000
                })

                return true
            }

            toast.add({
                type: 'error',
                message: response.message,
                duration: 3000
            })
        } catch (error) {
            toast.add({
                type: 'error',
                message: 'Something went wrong.',
                duration: 3000
            })
        }

        return false
    }

    const verification = async (token: string): Promise<boolean> => {
        try {
            const response = await $fetch<ResponseType>(
                '/api/auth/verification',
                {
                    method: 'POST',
                    body: {
                        token
                    }
                }
            )

            if (response.success) {
                toast.add({
                    type: 'success',
                    message: response.message,
                    duration: 3000
                })

                return true
            }

            toast.add({
                type: 'error',
                message: response.message,
                duration: 3000
            })
        } catch (error) {
            toast.add({
                type: 'error',
                message: 'Something went wrong.',
                duration: 3000
            })
        }

        return false
    }

    const login = async (email: string): Promise<boolean> => {
        try {
            const response = await $fetch<ResponseType>('/api/auth/login', {
                method: 'POST',
                body: {
                    email
                }
            })

            if (response.success) {
                toast.add({
                    type: 'success',
                    message: response.message,
                    duration: 3000
                })

                return true
            }

            toast.add({
                type: 'error',
                message: response.message,
                duration: 3000
            })
        } catch (error) {
            toast.add({
                type: 'error',
                message: 'Something went wrong.',
                duration: 3000
            })
        }

        return false
    }

    const redirect = async (token: string): Promise<boolean> => {
        try {
            const response = await $fetch<ResponseType>('/api/auth/redirect', {
                method: 'POST',
                body: {
                    token
                }
            })

            if (response.success) {
                toast.add({
                    type: 'success',
                    message: response.message,
                    duration: 3000
                })

                return true
            }

            toast.add({
                type: 'error',
                message: response.message,
                duration: 3000
            })
        } catch (error) {
            toast.add({
                type: 'error',
                message: 'Something went wrong.',
                duration: 3000
            })
        }

        return false
    }

    const session = async (): Promise<null | User> => {
        try {
            const response = await $fetch<ResponseType<User>>(
                '/api/auth/session',
                {
                    method: 'GET'
                }
            )

            if (response.success) {
                toast.add({
                    type: 'success',
                    message: response.message,
                    duration: 3000
                })

                if (response.data) {
                    return response.data
                }
            }
        } catch (error) {
            toast.add({
                type: 'error',
                message: 'Something went wrong.',
                duration: 3000
            })
        }

        return null
    }

    const logout = async (): Promise<boolean> => {
        try {
            const response = await $fetch<ResponseType>('/api/auth/logout', {
                method: 'POST'
            })

            if (response.success) {
                toast.add({
                    type: 'success',
                    message: response.message,
                    duration: 3000
                })

                return true
            }

            toast.add({
                type: 'error',
                message: response.message,
                duration: 3000
            })
        } catch (error) {
            toast.add({
                type: 'error',
                message: 'Something went wrong.',
                duration: 3000
            })
        }

        return false
    }

    return {
        register,
        verification,
        login,
        redirect,
        session,
        logout
    }
}
