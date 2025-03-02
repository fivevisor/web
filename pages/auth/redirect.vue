<template>
    <div class="h-full flex items-center justify-center">
        <div class="flex flex-col items-center">
            <h1 class="text-4xl text-white font-semibold">REDIRECTING</h1>
            <p class="text-center text-sm text-zinc-400">
                Please wait, you are logging in to your account. This may take a
                few seconds...
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: '/auth/verification'
})
</script>
