<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { UserCircleIcon } from "@heroicons/vue/24/solid";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/vue/24/solid";

import ModalContainer from "./ModalContainer.vue";

const router = useRouter();

const activeModal = ref(null);

function openModal(modalId) {
    activeModal.value = modalId;
    console.log(activeModal.value);
}

function toggleModal() {
    activeModal.value = null;
}

function goToLogIn() {
    router.push("/login");
}

</script>

<template>
    <div class="flex items-center px-5 py-8 justify-between">
        <div class="flex items-center gap-2">
            <UserCircleIcon
                class="w-10 h-10 text-blue-300 cursor-pointer hover:text-blue-500 duration-300 ease-in-out"
            />
            <p class="text-sm text-gray-400">Realmeiso</p>
        </div>

        <button>
            <ArrowLeftEndOnRectangleIcon @click="openModal('modal-exit')"
                class="w-10 h-10 text-blue-300 cursor-pointer hover:text-blue-500 duration-300 ease-in-out"
            />
        </button>
    </div>


    <!-- модалка выхода из игры -->
    <ModalContainer
        v-if="activeModal === 'modal-exit'"
        @closeModal="toggleModal"
    >
        <template #content>
            <p class="text-lg text-wrap text-gray-500 text-center mb-4">
                Выйти из приложения?
            </p>
        </template>
        <template #actions>
            <div class="flex gap-4">
                <button
                    class="px-4 py-2 rounded-xl text-white text-lg font-bold uppercase shadow-md w-28 bg-blue-200 hover:bg-blue-500 duration-300 ease-in-out"
                    @click="goToLogIn"
                >
                    да
                </button>
                <button
                    class="px-4 py-2 rounded-xl text-white text-lg font-bold uppercase shadow-md w-28 bg-blue-300 hover:bg-blue-500 duration-300 ease-in-out"
                    @click="toggleModal"
                >
                    нет
                </button>
            </div>
        </template>
    </ModalContainer>

</template>
