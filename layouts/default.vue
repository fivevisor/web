<template>
    <div class="h-screen flex flex-col">
        <DefaultHeader />
        <div class="flex-1">
            <slot />
        </div>
        <DefaultFooter />
    </div>
</template>
