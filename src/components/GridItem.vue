<script setup>
import { ref, watch } from "vue";

const props = defineProps({
    number: {
        type: Number,
        default: 0,
    },
    index: {
        type: Number,
        required: true,
    },
    isSelected: {
        type: Boolean,
        default: false
    }
});

// defineEmits(['select']) говорит Vue, что компонент GridItem.vue собирается "излучать" (emit) событие с именем select. Мы объявляем это событие заранее, чтобы использовать его позже в коде.
// emit — это переменная, которая теперь содержит функцию для отправки событий. Мы можем вызвать её в любом месте компонента, чтобы передать данные в родительский компонент.
const emit = defineEmits(["select"]);
const isSelected = ref(props.isSelected);

function toggleSelect() {
    isSelected.value = !isSelected.value;
    // Именно здесь используется emit для отправки события.
    emit("select", {
        number: props.number,
        isSelected: isSelected.value,
        index: props.index,
    });
    // 'select' — имя события, которое мы отправляем. Родительский компонент (Grid.vue) сможет "слушать" это событие по имени select.
    // { number: props.number, isSelected: isSelected.value } — данные, которые мы отправляем в событии. В нашем случае это объект с двумя полями:
    // number: props.number — значение текущей ячейки, которое передано через props (в нашем случае это число от 1 до 9).
    // isSelected: isSelected.value — текущее состояние выделения ячейки (выделена или нет).
}

watch(() => props.isSelected, (newVal) => {
    isSelected.value = newVal;
});
</script>

<template>
    <div
        :class="[
            'flex justify-center items-center w-8 h-8 font-semibold border rounded-md text-gray-400  cursor-pointer',
            {
                ' border-gray-400 bg-slate-100': isSelected,
            },
        ]"
        @click="toggleSelect"
    >
        {{ number }}
    </div>
</template>
