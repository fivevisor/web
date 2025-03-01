<template>
    <div class="h-screen flex flex-col">
        <Header />
        <div class="flex-1">
            <slot />
            <div class="absolute bottom-10 right-10">
                <ToastList />
            </div>
        </div>
        <Footer />
    </div>
</template>
