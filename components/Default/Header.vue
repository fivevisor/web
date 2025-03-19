<template>
    <div
        class="sticky top-0 h-16 px-96 flex items-center justify-between bg-zinc-900 border-b border-zinc-800"
    >
        <NuxtLink to="/">
            <NuxtImg src="/logo.svg" alt="Logo" width="128" />
        </NuxtLink>
        <div class="flex items-center gap-x-5">
            <NuxtLink
                to="/auth/register"
                class="py-2 px-4 text-xs text-white bg-amber-600 rounded-full transition hover:bg-amber-800"
            >
                Get Started
            </NuxtLink>
            <NuxtLink
                to="/auth/login"
                class="text-sm text-zinc-400 transition hover:text-white"
                >Already have an account?</NuxtLink
            >
        </div>
    </div>
</template>
