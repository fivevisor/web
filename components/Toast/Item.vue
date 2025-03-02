<template>
    <div class="py-2 px-4 bg-zinc-900 rounded-md border border-zinc-800">
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
</template>

<script lang="ts" setup>
interface Toast {
    id: number
    type: 'inform' | 'success' | 'error'
    duration: number
    message: string
}

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
</script>
