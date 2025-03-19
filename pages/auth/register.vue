<template>
    <NuxtLayout>
        <div class="h-full flex items-center justify-center">
            <div class="w-80 flex flex-col gap-y-5">
                <div class="flex flex-col items-center">
                    <h1 class="text-4xl text-white font-semibold">REGISTER</h1>
                    <p class="text-center text-sm text-zinc-400">
                        Enter your details and click the continue to create your
                        account.
                    </p>
                </div>
                <div
                    class="h-24 flex items-center justify-center border border-zinc-900"
                >
                    <h1 class="text-zinc-400">CONTENT</h1>
                </div>
                <div class="flex items-center gap-x-2">
                    <span class="h-px flex-1 bg-zinc-900" />
                    <h1 class="text-xs text-zinc-400">OR CONTINUE WITH</h1>
                    <span class="h-px flex-1 bg-zinc-900" />
                </div>
                <NuxtLink
                    to="/auth/login"
                    class="py-2 flex items-center justify-center gap-x-2 bg-white rounded-md transition hover:bg-zinc-400"
                >
                    <Icon name="mdi:account-arrow-up" />
                    <h1 class="text-sm">Login to Account</h1>
                </NuxtLink>
                <p class="text-center text-sm text-zinc-400">
                    By clicking continue, you agree to our
                    <NuxtLink
                        to="/legal/terms-of-service"
                        class="underline transition hover:text-white"
                        >Terms of Service</NuxtLink
                    >
                    &
                    <NuxtLink
                        to="/legal/privacy-policy"
                        class="underline transition hover:text-white"
                        >Privacy Policy</NuxtLink
                    >.
                </p>
            </div>
        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
await(
    () => new Promise((resolve) => setTimeout(resolve, Math.random() * 2000))
)()
</script>
