<script setup>
import { ref } from "vue";

import TheTimer from "./TheTimer.vue";
import TheGrid from "./TheGrid.vue";
import TheStats from "./TheStats.vue";
import { SpeakerWaveIcon } from "@heroicons/vue/24/solid";
import { SpeakerXMarkIcon } from "@heroicons/vue/24/solid";
import { BookOpenIcon } from "@heroicons/vue/24/solid";
import { ArrowPathIcon } from "@heroicons/vue/24/solid";
import { ArrowUturnLeftIcon } from "@heroicons/vue/24/solid";

const isSoundOn = ref(true);

function toggleSound() {
    isSoundOn.value = !isSoundOn.value;
}
</script>

<template>
    <div class="flex flex-col h-screen gap-8 px-5 ">
        <button>
            <ArrowUturnLeftIcon
                class="w-10 h-10 text-blue-300 cursor-pointer hover:text-blue-500 duration-300 ease-in-out"
            />
        </button>
        <TheStats />
        <TheTimer />
        <TheGrid />
        <div class="flex items-center justify-end gap-4">
            <button @click="toggleSound" aria-label="Toggle sound">
                <SpeakerWaveIcon
                    v-if="isSoundOn"
                    class="w-10 h-10 text-blue-300 cursor-pointer hover:text-blue-500 duration-300 ease-in-out"
                />
                <SpeakerXMarkIcon
                    v-else
                    class="w-10 h-10 text-gray-300 cursor-pointer hover:text-gray-500 duration-300 ease-in-out"
                />
            </button>
            <BookOpenIcon
                class="w-10 h-10 text-blue-300 cursor-pointer hover:text-blue-500 duration-300 ease-in-out"
            />
            <ArrowPathIcon
                class="w-10 h-10 text-blue-300 cursor-pointer hover:text-blue-500 duration-300 ease-in-out"
            />
        </div>
    </div>
</template>
