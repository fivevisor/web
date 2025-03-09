export default () => {
    const time = ref<number>(0)
    const finishTime = ref<number>(0)

    let interval: null | NodeJS.Timeout = null
    let finishHandler: null | (() => void) = null

    const create = (duration: number) => {
        finishTime.value = duration

        start()
    }

    const start = () => {
        if (interval) return

        interval = setInterval(() => {
            time.value += 10

            if (time.value >= finishTime.value) {
                if (finishHandler) {
                    finishHandler()
                }

                stop()
            }
        }, 10)
    }

    const stop = () => {
        if (!interval) return

        clearInterval(interval)

        interval = null
    }

    const onFinish = (handler: () => void) => {
        finishHandler = handler
    }

    return {
        time,
        create,
        start,
        stop,
        onFinish
    }
}
