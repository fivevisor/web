interface Toast {
    id: number
    type: 'inform' | 'success' | 'error'
    duration: number
    message: string
}

export default () => {
    const list = useState<Toast[]>('list', () => [])

    const send = (data: Omit<Toast, 'id'>) => {
        let id: number

        do {
            id = Math.random() * 1000
        } while (list.value.find((value) => id === value.id))

        list.value.push({ id, ...data })

        setTimeout(() => {
            const index = list.value.findIndex((value) => id === value.id)

            list.value.splice(index, 1)
        }, data.duration)
    }

    return {
        list,
        send
    }
}
