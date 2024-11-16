<script setup>
const props = defineProps({
    bg: String,
    logo: String,
    name: String,
    action: String,
});
</script>

<template>
    <div
        :style="{ backgroundImage: `url(${props.bg})` }"
        class="min-w-40 h-44 rounded-xl bg-cover bg-center shadow-md flex flex-col gap-2 justify-center items-center"
    >
        <div class="flex flex-col justify-center items-center">
            <img :src="props.logo" alt="logo" class="h-20" />
            <p class="text-lg font-bold text-gray-100">{{ props.name }}</p>
        </div>

        <button
            class="bg-blue-300 px-4 rounded-xl h-8 w-24 text-white text-center text-md font-bold  shadow-md hover:bg-blue-500 duration-300 ease-in-out"
        >
            {{ props.action }}
        </button>
    </div>
</template>
