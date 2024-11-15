// src/stores/store.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("main", () => {
    const collapsedSum = ref(0); // Сумма "схлопнутых" ячеек

    // Функция для добавления суммы выбранных ячеек к общей сумме
    function addToCollapsedSum(sum) {
        collapsedSum.value += sum;
    }

    return { collapsedSum, addToCollapsedSum };
});

// Pinia работает реактивно, что означает: при изменении состояния в хранилище компоненты, использующие это состояние, обновляются автоматически.
