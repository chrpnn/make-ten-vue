<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goToGame() {
    router.push("/game");
}
</script>

<template>
    <div class="mx-auto">
        <button
            @click="goToGame"
            class="bg-blue-300 py-2 px-4 rounded-xl w-60 h-12 text-white text-lg font-bold uppercase shadow-md hover:bg-blue-500 duration-300 ease-in-out"
        >
            Играть
        </button>
    </div>
</template>
