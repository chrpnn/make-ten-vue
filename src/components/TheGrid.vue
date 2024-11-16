<script setup>
import GridItem from "./GridItem.vue";
import { ref, computed, watch } from "vue";
import { useStore } from "../store/store"; // Импортируем хранилище Pinia

const store = useStore(); // Инициализируем хранилище

const getRandomNumber = () => {
    const numberRandoms = 2; // Колво случ. чисел для суммирования. Чем выше число, тем ближе "распределение" случ. чисел будет к линейному (к 5)
    const max = 9;
    let sum = 0;

    for (let i = 0; i < numberRandoms; i++) {
        sum += Math.random();
    }

    return Math.max(1, Math.floor((sum / numberRandoms) * max));
};

const cells = ref(Array.from({ length: 100 }, () => getRandomNumber()));

console.log(cells.value);

// Массив для хранения индексов и значений выбранных ячеек
const selectedCells = ref([]);
console.log(selectedCells.value);

// В Vue computed (вычисляемое свойство) — это способ отслеживать и автоматически обновлять данные, зависящие от других реактивных данных.

// computed — это функция, которая принимает коллбэк, содержащий логику для вычисления значения. Этот коллбэк будет выполняться каждый раз, когда изменяется любая реактивная зависимость внутри него. В данном случае зависимость — это массив selectedNumbers.value.
const selectedSum = computed(() =>
    selectedCells.value.reduce((sum, cell) => sum + cell.number, 0),
);

// Обработчик выбора ячейки с сохранением индекса
function handleSelect({ index, number, isSelected }) {
    // Проверяем, если ячейка уже выбрана
    if (isSelected) {
        // Проверка на соседность: если ячейка находится рядом с уже выбранной
        const isNeighbor = selectedCells.value.some((cell) => {
            const diff = Math.abs(cell.index - index);
            return diff === 1 || diff === 10; // соседи по горизонтали (разница 1) или вертикали (разница 10)
        });

        if (isNeighbor || selectedCells.value.length === 0) {
            selectedCells.value.push({ index, number });
        }
    } else {
        // Убираем ячейку из выделенных
        const cellIndex = selectedCells.value.findIndex(
            (cell) => cell.index === index,
        );
        if (cellIndex >= 0) selectedCells.value.splice(cellIndex, 1);
    }

    console.log("Сумма выбранных чисел:", selectedSum.value);
}

// Функция для смещения значений вниз
function applyGravity() {
    for (let col = 0; col < 10; col++) {
        // Идем снизу вверх
        for (let row = 9; row >= 0; row--) {
            const index = row * 10 + col;
            if (cells.value[index] === null) {
                // Находим следующую непустую ячейку сверху
                for (let aboveRow = row - 1; aboveRow >= 0; aboveRow--) {
                    const aboveIndex = aboveRow * 10 + col;
                    if (cells.value[aboveIndex] !== null) {
                        cells.value[index] = cells.value[aboveIndex];
                        cells.value[aboveIndex] = null;
                        break;
                    }
                }
            }
        }
    }
}

// Наблюдение за изменением selectedSum и удаление ячеек при сумме 10
// В Composition API watch — это функция, которая:
// Отслеживает изменение значения реактивной переменной или вычисляемого свойства.
// Реагирует на изменение, выполняя функцию-обработчик.
watch(selectedSum, (newSum) => {
    if (newSum === 10) {
        // Удаляем выбранные числа из массива cells по их индексам
        selectedCells.value.forEach((cell) => {
            cells.value[cell.index] = null;
        });

        // Передаем сумму в хранилище
        store.addToCollapsedSum(newSum * selectedCells.value.length);

        // Очищаем массив selectedCells (сбрасываем выделение)
        selectedCells.value = [];

        // Применяем "падение" ячеек
        applyGravity();

        console.log("Элементы удалены, массив обновлен:", cells.value);
    }
});
</script>

<template>
    <div class="grid grid-cols-10 align-center gap-1 mx-auto w-max">
        <GridItem
            v-for:="(cell, id) in cells"
            :key="id"
            :number="cell"
            :index="id"
            @select="handleSelect"
            :class="{
                'text-yellow-400': cell === 1,
                'text-green-400': cell === 2,
                'text-red-400': cell === 3,
                'text-violet-400': cell === 4,
                'text-orange-400': cell === 5,
                'text-pink-400': cell === 6,
                'text-teal-400': cell === 7,
                'text-cyan-400': cell === 8,
                'text-gray-900': cell === 9,
            }"
        />
    </div>
</template>
