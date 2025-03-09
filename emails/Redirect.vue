<template>
    <ETailwind>
        <EHtml>
            <EHead>
                <EFont font-family="Saira" />
            </EHead>
            <EPreview>Login to Your Account</EPreview>
            <EBody>
                <EText class="text-2xl font-bold">
                    Login to Your Account
                </EText>
                <EText>Click the button below to login your account.</EText>
                <EButton
                    :href="`/auth/redirect?token=${token}`"
                    class="py-2 px-4 text-sm text-white bg-amber-600 rounded-md"
                    >Login Your Account</EButton
                >
            </EBody>
        </EHtml>
    </ETailwind>
</template>

<script lang="ts" setup>
defineProps<{
    token: string
}>()
</script>
