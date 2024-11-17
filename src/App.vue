<script setup>
import { useRoute } from "vue-router";
import TheHeader from "./components/TheHeader.vue";

const route = useRoute();
</script>

<template>
    <main class="flex flex-col h-screen-dynamic justify-between">
        <TheHeader v-if="!route.meta.hideHeader" />
        <router-view />
    </main>
</template>
