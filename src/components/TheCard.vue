<script setup>
const props = defineProps({
    bg: String,
});
</script>

<template>
    <div
        :style="{ backgroundImage: `url(${props.bg})` }"
        class="min-w-40 h-44 rounded-xl bg-cover bg-center shadow-md"
    ></div>
</template>
