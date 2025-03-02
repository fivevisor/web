<template>
    <div class="h-full flex items-center justify-center">
        <h1 class="text-4xl text-white font-semibold">PRIVACY POLICY</h1>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: '/privacy-policy'
})

await(
    async () =>
        new Promise((resolve) => setTimeout(resolve, Math.random() * 5000))
)()
</script>
