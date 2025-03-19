<template>
    <NuxtLayout>
        <div class="h-full flex items-center justify-center">
            <h1 class="text-4xl text-white">
                FIVE<span class="font-semibold">VISOR</span>
            </h1>
        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
await(
    () => new Promise((resolve) => setTimeout(resolve, Math.random() * 2000))
)()
</script>
