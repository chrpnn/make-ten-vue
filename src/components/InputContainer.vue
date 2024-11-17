<script setup>
// Определяем свойства (props)
const props = defineProps({
    modelValue: {
        type: [String, Number], 
        required: true, 
    },
    type: {
        type: String,
        default: "text", 
    },
    placeholder: {
        type: String,
        default: "", 
    },
    classes: {
        type: String,
        default: "", 
    },
});

// Отправляем обновления вверх через emit
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
    <input
        :type="props.type"
        :placeholder="props.placeholder"
        :value="props.modelValue"
        @input="(event) => emit('update:modelValue', event.target.value)"
        :class="`w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${classes}`"
    />
</template>
