<script setup>
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";

import TheCard from "./TheCard.vue";
</script>

<template>
    <div
        class="flex gap-3 px-5 pb-4 w-full overflow-x-scroll whitespace-nowrap"
    >
        <TheCard class="p-2" :bg="bg1" />
        <TheCard class="p-2" :bg="bg2" />
        <TheCard class="p-2" :bg="bg3" />
    </div>
</template>
