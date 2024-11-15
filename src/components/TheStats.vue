<script setup>
import { useStore } from "../store/store";
const store = useStore();
</script>

<template>
    <div class="flex flex-col items-start justify-start">
        <p class="text-gray-400">Очки: {{ store.collapsedSum }}</p>
        <p class=" text-gray-400">Лучший результат: 520</p>
    </div>
</template>
