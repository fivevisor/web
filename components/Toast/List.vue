<template>
    <div class="w-80 flex flex-col gap-y-2">
        <TransitionGroup>
            <ToastItem v-for="item in list" :key="item.id" :data="item" />
        </TransitionGroup>
    </div>
</template>

<script lang="ts" setup>
const { list } = useToast()
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateX(10%);
}

.v-move {
    transition: transform 0.25s ease;
}
</style>
