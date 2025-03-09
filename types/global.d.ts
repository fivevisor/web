export interface Toast {
    id: number
    type: 'inform' | 'success' | 'error'
    duration: number
    message: string
}
