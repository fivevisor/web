<template>
    <div class="h-full flex items-center justify-center">
        <div class="w-72 flex flex-col gap-y-5">
            <div class="flex flex-col items-center">
                <h1 class="text-4xl text-white font-semibold">FIVEVISOR</h1>
                <p class="text-center text-sm text-zinc-400">
                    A user-friendly dashboard for your FiveM server.
                </p>
            </div>
            <button
                @click="
                    send({
                        type: 'error',
                        duration: 3000,
                        message: 'This feature is currently not active.'
                    })
                "
                class="py-2 px-4 text-sm text-white bg-amber-600 rounded-md transition hover:bg-amber-800"
            >
                Get Started
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: '/'
})

const { send } = useToast()
</script>
