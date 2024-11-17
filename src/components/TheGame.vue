<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import TheTimer from "./TheTimer.vue";
import TheGrid from "./TheGrid.vue";
import TheStats from "./TheStats.vue";
import ModalContainer from "./ModalContainer.vue";

import { SpeakerWaveIcon } from "@heroicons/vue/24/solid";
import { SpeakerXMarkIcon } from "@heroicons/vue/24/solid";
import { BookOpenIcon } from "@heroicons/vue/24/solid";
import { ArrowPathIcon } from "@heroicons/vue/24/solid";
import { ArrowUturnLeftIcon } from "@heroicons/vue/24/solid";

const router = useRouter();

const isSoundOn = ref(true);
const activeModal = ref(null);

function toggleSound() {
    isSoundOn.value = !isSoundOn.value;
}

function openModal(modalId) {
    activeModal.value = modalId;
    console.log(activeModal.value);
}

function toggleModal() {
    activeModal.value = null;
}

function goToHome() {
    router.push("/");
}

function restartGame() {
    window.location.reload();
}
</script>

<template>
    <div class="flex flex-col h-dvh gap-8 px-5 pb-16">
        <button>
            <ArrowUturnLeftIcon
                @click="openModal('modal-go-to-home')"
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
                @click="openModal('modal-rules')"
                class="w-10 h-10 text-blue-300 cursor-pointer hover:text-blue-500 duration-300 ease-in-out"
            />
            <ArrowPathIcon
                @click="openModal('modal-restart')"
                class="w-10 h-10 text-blue-300 cursor-pointer hover:text-blue-500 duration-300 ease-in-out"
            />
        </div>
    </div>

    <!-- модальные окна -->
    <ModalContainer
        v-if="activeModal === 'modal-go-to-home'"
        @closeModal="toggleModal"
    >
        <template #content>
            <p class="text-lg text-wrap text-gray-500 text-center mb-4">
                Завершить игру <br />и вернуться в главное меню?
            </p>
        </template>
        <template #actions>
            <div class="flex gap-4">
                <button
                    class="px-4 py-2 rounded-xl text-white text-lg font-bold uppercase shadow-md w-28 bg-blue-200 hover:bg-blue-500 duration-300 ease-in-out"
                    @click="goToHome"
                >
                    выйти
                </button>
                <button
                    class="px-4 py-2 rounded-xl text-white text-lg font-bold uppercase shadow-md w-28 bg-blue-300 hover:bg-blue-500 duration-300 ease-in-out"
                    @click="toggleModal"
                >
                    отмена
                </button>
            </div>
        </template>
    </ModalContainer>

    <ModalContainer
        v-if="activeModal === 'modal-restart'"
        @closeModal="toggleModal"
    >
        <template #content>
            <p class="text-lg text-wrap text-gray-500 text-center mb-4">
                Начать новую игру?
            </p>
        </template>
        <template #actions>
            <div class="flex gap-4">
                <button
                    class="px-4 py-2 rounded-xl text-white text-lg font-bold uppercase shadow-md w-28 bg-blue-200 hover:bg-blue-500 duration-300 ease-in-out"
                    @click="restartGame"
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

    <ModalContainer
        v-if="activeModal === 'modal-rules'"
        @closeModal="toggleModal"
    >
        <template #title>
            <p class="text-lg font-semibold">🎮 Правила игры</p>
        </template>
        <template #content>
            <div class="flex flex-col gap-2">
                <p class="text-sm text-gray-600">
                    Выбирай соседние ячейки и набирай сумму равную десяти!
                </p>
                <ul class="list-disc list-inside text-sm text-gray-600">
                    <li>
                        Выбирай только <strong>соседние ячейки</strong> (по
                        горизонтали или вертикали, по диагонали — нельзя).
                    </li>
                    <li>У тебя есть <strong>3 минуты</strong> на одну игру!</li>
                    <li>
                        Если ты собрал сумму 10 из 2 ячеек — получаешь 20 очков,
                        из 3 — 30 очков и так далее.
                    </li>
                    <li>
                        После того как ячейки исчезают, на их место падают
                        другие.
                    </li>
                </ul>
            </div>
        </template>
        <template #actions>
            <div class="flex justify-center gap-4">
                <button
                    class="px-4 py-2 mt-4 rounded-xl text-white text-lg font-bold uppercase shadow-md w-28 bg-blue-300 hover:bg-blue-500 duration-300 ease-in-out"
                    @click="toggleModal"
                >
                    ок
                </button>
            </div>
        </template>
    </ModalContainer>
</template>
