<script setup>
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
    <main class="flex flex-col h-screen justify-between">
        <TheHeader />
        <router-view />
    </main>
</template>
