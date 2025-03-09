<template>
    <div class="h-full flex items-center justify-center">
        <div class="w-72 flex flex-col gap-y-5">
            <div class="flex flex-col items-center">
                <h1 class="text-4xl text-white font-semibold">DASHBOARD</h1>
            </div>
            <button
                @click="logout"
                class="py-2 px-4 text-sm text-white bg-red-500 rounded-md transition hover:bg-red-700"
            >
                Logout
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
useHead({
    title: 'Dashboard'
})

const logout = async () => {
    const success = await useAuth().logout()

    if (success) {
        await useRouter().push('/')
    }
}
</script>
