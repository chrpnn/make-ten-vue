<script setup>
import { UserCircleIcon } from "@heroicons/vue/24/solid";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/vue/24/solid";
</script>

<template>
    <div class="flex items-center px-5 py-8 justify-between">
        <div class="flex items-center gap-2">
            <UserCircleIcon
                class="w-10 h-10 text-blue-300 cursor-pointer hover:text-blue-500 duration-300 ease-in-out"
            />
            <p class="text-sm text-gray-400">Realmeiso</p>
        </div>

        <ArrowLeftEndOnRectangleIcon
            class="w-10 h-10 text-blue-300 cursor-pointer hover:text-blue-500 duration-300 ease-in-out"
        />
    </div>
</template>
