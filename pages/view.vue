<template>
    <div>
        <h1>VIEW</h1>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: '/view'
})

await(
    async () =>
        new Promise((resolve) => setTimeout(resolve, Math.random() * 5000))
)()
</script>
