<script setup>
const props = defineProps({
    logo: String,
    alt: String,
});
</script>

<template>
    <div>
        <button>
            <img :src="props.logo" :alt="props.alt" class="h-12"/>
        </button>
    </div>
</template>
