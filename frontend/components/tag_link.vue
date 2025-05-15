<template>
    <div class="text-white border border-[#303639] rounded-xs py-1 px-3 cursor-pointer hover:bg-[#303639] hover:border-white">{{ message }}</div>
</template>

<script setup>
const props = defineProps({
    message: "string",
});
</script>