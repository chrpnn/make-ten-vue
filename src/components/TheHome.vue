<script setup>
import TheLogo from "./TheLogo.vue";
import TheScore from "./TheScore.vue";
import TheButton from "./TheButton.vue";
import TheFooter from "./TheFooter.vue";
import CardsCollection from "./CardsCollection.vue";
</script>

<template>
    <div class="flex flex-col h-screen justify-between">
        <div class="flex flex-col gap-8">
            <CardsCollection />
        </div>
        <div class="flex flex-col gap-2">
            <TheLogo />
            <TheScore />
        </div>
        <TheButton />
        <TheFooter />
    </div>
</template>
