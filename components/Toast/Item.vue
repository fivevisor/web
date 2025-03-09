<template>
    <div
        @mouseenter="timer.stop"
        @mouseleave="timer.start"
        class="bg-zinc-900 rounded-md border border-zinc-800 overflow-hidden"
    >
        <div class="py-2 px-4">
            <h1
                :style="{
                    color
                }"
                class="font-medium uppercase"
            >
                {{ data.type }}
            </h1>
            <p class="text-sm text-white">{{ data.message }}</p>
        </div>
        <div class="h-1 bg-zinc-800">
            <div
                :style="{
                    width: `${elapsedTimePercentage}%`
                }"
                class="h-full bg-zinc-400"
            ></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { Toast } from '~/types/global'

const { data } = defineProps<{
    data: Toast
}>()

const color = computed(() =>
    data.type === 'success'
        ? 'oklch(0.723 0.219 149.579)'
        : data.type === 'error'
        ? 'oklch(0.637 0.237 25.331)'
        : 'oklch(0.623 0.214 259.815)'
)

const timer = useTimer()

const elapsedTimePercentage = computed<number>(
    () => (timer.time.value * 100) / data.duration
)

onMounted(() => {
    timer.create(data.duration)
    timer.onFinish(() => {
        useToast().remove(data.id)
    })
})
</script>
