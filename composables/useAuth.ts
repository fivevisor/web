export default () => {
    const register = async (
        username: string,
        email: string
    ): Promise<boolean> =>
        new Promise((resolve) =>
            setTimeout(() => resolve(true), Math.random() * 2000)
        )

    const verification = async (token: string): Promise<boolean> =>
        new Promise((resolve) =>
            setTimeout(() => resolve(true), Math.random() * 2000)
        )

    const login = async (email: string): Promise<boolean> =>
        new Promise((resolve) =>
            setTimeout(() => resolve(true), Math.random() * 2000)
        )

    const redirect = async (token: string): Promise<boolean> =>
        new Promise((resolve) =>
            setTimeout(() => resolve(true), Math.random() * 2000)
        )

    const logout = async (): Promise<boolean> =>
        new Promise((resolve) =>
            setTimeout(() => resolve(true), Math.random() * 2000)
        )

    return {
        register,
        verification,
        login,
        redirect,
        logout
    }
}
