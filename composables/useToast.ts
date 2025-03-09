import type { Toast } from '~/types/global'

export default () => {
    const list = useState<Toast[]>('list', () => [])

    const add = (data: Omit<Toast, 'id'>) => {
        let id: number

        do {
            id = Math.random() * 1000
        } while (list.value.find((value) => id === value.id))

        list.value.push({ id, ...data })
    }

    const remove = (id: number) => {
        const index = list.value.findIndex((value) => id === value.id)

        list.value.splice(index, 1)
    }

    return {
        list,
        add,
        remove
    }
}
