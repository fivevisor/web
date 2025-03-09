<template>
    <div class="h-full flex items-center justify-center">
        <form @submit.prevent="onSubmit" class="w-72 flex flex-col gap-y-5">
            <div class="flex flex-col items-center">
                <h1 class="text-4xl text-white font-semibold">REGISTER</h1>
                <p class="text-center text-sm text-zinc-400">
                    Enter your details and click the continue to create your
                    account.
                </p>
            </div>
            <div class="flex flex-col gap-y-0.5">
                <h1 class="text-xs text-zinc-400">Username</h1>
                <input
                    v-model="username"
                    type="text"
                    placeholder="dragon_fire_123"
                    class="py-2 px-4 text-sm text-white bg-zinc-900 rounded-md border border-zinc-800 transition focus:outline-none focus:border-amber-600"
                />
                <p class="text-xs text-red-500">{{ errors.username }}</p>
            </div>
            <div class="flex flex-col gap-y-0.5">
                <h1 class="text-xs text-zinc-400">E-mail Address</h1>
                <input
                    v-model="email"
                    type="text"
                    placeholder="name@example.com"
                    class="py-2 px-4 text-sm text-white bg-zinc-900 rounded-md border border-zinc-800 transition focus:outline-none focus:border-amber-600"
                />
                <p class="text-xs text-red-500">{{ errors.email }}</p>
            </div>
            <button
                :disabled="!meta.valid || isSubmitting"
                type="submit"
                class="py-2 text-sm text-white bg-amber-600 rounded-md transition hover:bg-amber-800 disabled:opacity-50 disabled:bg-amber-600"
            >
                <span v-if="isSubmitting">
                    <Icon name="mdi:loading" class="animate-spin" />
                </span>
                <div v-else class="flex items-center justify-center gap-x-2">
                    <Icon name="mdi:magic" />
                    <h1>Click to Magic</h1>
                </div>
            </button>
            <div class="flex items-center gap-x-2">
                <span class="flex-1 h-px bg-zinc-800"></span>
                <h1 class="text-xs text-zinc-400">OR CONTINUE WITH</h1>
                <span class="flex-1 h-px bg-zinc-800"></span>
            </div>
            <NuxtLink
                to="/auth/login"
                class="py-2 flex items-center justify-center gap-x-2 text-sm bg-white rounded-md transition hover:bg-zinc-400"
            >
                <Icon name="mdi:account-arrow-up" />
                <h1>Login to Account</h1>
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
        </form>
    </div>
</template>

<script lang="ts" setup>
import * as yup from 'yup'

useHead({
    title: 'Register'
})

const schema = yup.object({
    username: yup
        .string()
        .required('Username required.')
        .min(4, 'Username must be at least 4 characters.'),
    email: yup
        .string()
        .required('E-mail address required.')
        .email('Enter a valid e-mail address.')
})

const { defineField, handleSubmit, isSubmitting, errors, meta } = useForm({
    validationSchema: schema
})

const [username] = defineField('username')
const [email] = defineField('email')

const onSubmit = handleSubmit(async (values) => {
    const success = await useAuth().register(values.username, values.email)

    if (success) {
        await useRouter().push('/')
    }
})
</script>
