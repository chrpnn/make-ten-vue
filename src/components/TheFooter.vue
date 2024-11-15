<script setup>
import { HomeIcon } from "@heroicons/vue/24/solid";
import { ShoppingBagIcon } from "@heroicons/vue/24/solid";
import { Cog6ToothIcon } from "@heroicons/vue/24/solid";
</script>

<template>
    <div class="flex justify-evenly items-center h-20 border-t">
        <HomeIcon
            class="w-10 h-10 text-blue-300 cursor-pointer hover:text-blue-500 duration-300 ease-in-out"
        />
        <ShoppingBagIcon
            class="w-10 h-10 text-blue-300 cursor-pointer hover:text-blue-500 duration-300 ease-in-out"
        />
        <Cog6ToothIcon
            class="w-10 h-10 text-blue-300 cursor-pointer hover:text-blue-500 duration-300 ease-in-out"
        />
    </div>
</template>
