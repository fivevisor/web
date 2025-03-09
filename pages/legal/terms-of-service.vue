<template>
    <div class="h-full flex items-center justify-center">
        <h1 class="text-4xl text-white font-semibold">TERMS OF SERVICE</h1>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: 'Terms of Service'
})

await(
    async () =>
        new Promise((resolve) => setTimeout(resolve, Math.random() * 2000))
)()
</script>
