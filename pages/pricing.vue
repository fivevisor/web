<template>
    <div class="h-full flex items-center justify-center">
        <h1 class="text-4xl text-white font-semibold">PRICING</h1>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: 'Pricing'
})

await(
    async () =>
        new Promise((resolve) => setTimeout(resolve, Math.random() * 2000))
)()
</script>
