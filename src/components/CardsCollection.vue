<script setup>
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";

import logo1 from "../assets/make-10-logo.png";
import logo2 from "../assets/tic-tac-toe-logo.png";
import logo3 from "../assets/sudoku-logo.png";

import TheCard from "./TheCard.vue";
</script>

<template>
    <div
        class="flex gap-3 px-5 pb-4 py-2 w-full overflow-x-scroll whitespace-nowrap"
    >
        <TheCard
            class="p-2 opacity-90 outline outline-2 outline-offset-2 outline-blue-500"
            :bg="bg1"
            :logo="logo1"
            :name="'Make 10'"
            :action="'Играть'"
        />
        <TheCard
            class="p-2 opacity-30"
            :bg="bg2"
            :logo="logo2"
            :name="'Tic Tac Toe'"
            :action="'Скоро...'"
        />
        <TheCard
            class="p-2 opacity-30"
            :bg="bg3"
            :logo="logo3"
            :name="'Sudoku'"
            :action="'Скоро...'"
        />
    </div>
</template>
