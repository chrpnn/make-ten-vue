<script setup>
import { XMarkIcon } from "@heroicons/vue/24/solid";

const emit = defineEmits(["closeModal"]);

function closeModal() {
    emit("closeModal");
}
</script>

<template>
    <div
        class="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-10 px-6"
    >
        <!-- модальное окно -->
        <div class="bg-white rounded-lg shadow-md max-w-full p-6">
            <!-- заголовок с кнопкой закрытия-->
            <div class="flex justify-between items-center">
                <slot name="title">
                    <p class="text-lg font-semibold"></p>
                </slot>
                <button @click="closeModal">
                    <XMarkIcon
                        class="w-10 h-10 text-blue-300 cursor-pointer hover:text-blue-500 duration-300 ease-in-out"
                    />
                </button>
            </div>

            <!-- содержимое -->
            <div>
                <slot name="content"></slot>
            </div>

            <!-- действия  -->
            <div>
                <slot name="actions"></slot>
            </div>
        </div>
    </div>
</template>
