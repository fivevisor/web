<template>
    <div
        class="h-16 px-96 flex items-center justify-between bg-zinc-900 border-t border-zinc-800"
    >
        <p class="text-sm text-zinc-400">
            © {{ currentYear }}
            <NuxtLink to="/" class="underline transition hover:text-white"
                >Fivevisor</NuxtLink
            >. All rights reserved.
        </p>
        <div class="flex gap-x-5">
            <NuxtLink
                to="/legal/terms-of-service"
                class="text-sm text-zinc-400 underline transition hover:text-white"
                >Terms of Service</NuxtLink
            >
            <NuxtLink
                to="/legal/privacy-policy"
                class="text-sm text-zinc-400 underline transition hover:text-white"
                >Privacy Policy</NuxtLink
            >
        </div>
    </div>
</template>

<script lang="ts" setup>
const currentYear = new Date().getFullYear()
</script>
