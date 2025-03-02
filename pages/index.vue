<template>
    <div>
        <h1>HOME</h1>
        <div>
            <h1>count: {{ count }}</h1>
            <button @click="count++">Add Count</button>
            <button @click="count = 0">Reset</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: '/'
})

await(
    async () =>
        new Promise((resolve) => setTimeout(resolve, Math.random() * 5000))
)()

const count = ref<number>(0)
</script>
