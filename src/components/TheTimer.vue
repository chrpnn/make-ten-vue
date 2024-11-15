<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Длительность таймера в секундах
const duration = 180;

// Рекативная переменная для прогресса
const progress = ref(100);

// Интервал обновления таймера (в миллисекундах)
const interval = 100;

// Функция обновления прогресса
function updateProgress() {
    const decrement = (100 / (duration * 1000)) * interval;
    progress.value = Math.max(progress.value - decrement, 0); // Уменьшаем, но не ниже 0
}

let timer;

// При монтировании компонента запускаем таймер
onMounted(() => {
    timer = setInterval(updateProgress, interval);
});

// При размонтировании компонента останавливаем таймер
onUnmounted(() => {
    clearInterval(timer);
});
</script>

<template>
    <div
        class="w-full h-2 rounded-md outline outline-1 outline-gray-200 overflow-hidden"
    >
        <div
            class="h-full bg-blue-300 transition-all duration-100"
            :style="{ width: progress + '%' }"
        ></div>
    </div>
</template>
