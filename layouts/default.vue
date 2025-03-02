<template>
    <div>
        <div>
            <h1>Test Project</h1>
            <div>
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/view">View</NuxtLink>
            </div>
        </div>
        <div>
            <slot />
        </div>
    </div>
</template>
