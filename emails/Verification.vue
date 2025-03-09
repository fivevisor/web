<template>
    <ETailwind>
        <EHtml>
            <EHead>
                <EFont font-family="Saira" />
            </EHead>
            <EPreview>Verify Your E-Mail Address</EPreview>
            <EBody>
                <EText class="text-2xl font-bold">
                    Verify Your E-Mail Address
                </EText>
                <EText>
                    Click the button below to verify your e-mail address.
                </EText>
                <EButton
                    :href="`/auth/verification?token=${token}`"
                    class="py-2 px-4 text-sm text-white bg-amber-600 rounded-md"
                    >Verify E-Mail Address</EButton
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
