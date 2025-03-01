<template>
    <div
        class="sticky top-0 h-16 px-96 flex items-center justify-between bg-zinc-900 border-b border-zinc-800"
    >
        <NuxtLink to="/">
            <Brand :size="128" />
        </NuxtLink>
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
