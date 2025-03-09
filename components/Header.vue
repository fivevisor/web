<template>
    <div
        class="sticky top-0 h-16 px-96 flex items-center justify-between bg-zinc-900 border-b border-zinc-800"
    >
        <div class="flex items-center gap-x-10">
            <NuxtLink to="/">
                <Brand :size="128" />
            </NuxtLink>
            <div class="flex">
                <div
                    :style="indicatorOptions"
                    class="absolute h-9 bg-zinc-800 rounded-full transition-all"
                ></div>
                <NuxtLink
                    v-for="(item, index) in routes"
                    :key="index"
                    :id="item.path"
                    :to="item.path"
                    class="relative py-2 px-4 flex items-center gap-x-2 text-sm text-zinc-400 transition hover:text-white"
                >
                    <Icon :name="item.icon" />
                    {{ item.label }}
                </NuxtLink>
            </div>
        </div>
        <div class="flex gap-x-5">
            <NuxtLink
                to="/auth/register"
                class="text-sm text-zinc-400 underline transition hover:text-white"
                >Register</NuxtLink
            >
            <NuxtLink
                to="/auth/login"
                class="text-sm text-zinc-400 underline transition hover:text-white"
                >Login</NuxtLink
            >
        </div>
    </div>
</template>

<script lang="ts" setup>
const indicatorOptions = ref<{ [key: string]: string }>({})

interface Route {
    path: string
    icon: string
    label: string
}

const routes: Route[] = [
    {
        path: '/',
        icon: 'mdi:house',
        label: 'Home'
    },
    {
        path: '/docs',
        icon: 'mdi:book-open-page-variant',
        label: 'Docs'
    },
    {
        path: '/pricing',
        icon: 'mdi:attach-money',
        label: 'Pricing'
    }
]

const router = useRouter()

const moveIndicator = (path: string) => {
    const element = document.getElementById(path) as HTMLElement

    // indicatorOptions.value = {
    //     left: `${element.offsetLeft}px`,
    //     height: `${element.offsetHeight}px`,
    //     width: `${element.offsetWidth}px`
    // }
}

router.afterEach((to) => {
    moveIndicator(to.path)
})

onMounted(() => {
    moveIndicator(useRoute().path)
})
</script>

<style scoped>
/* .router-link-exact-active {
    @apply text-white;
} */
</style>
