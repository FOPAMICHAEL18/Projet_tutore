<template>
    <div class="flex items-center group cursor-pointer">
        <div class="after:block after:h-0.5 after:w-0 after:bg-[#EBC80C] after:transition-all after:duration-500  group-hover:after:w-5 ease-in-out "></div>
        <p class=" group-hover:text-white transition-all duration-500 group-hover:translate-x-2 ease-in-out ">{{ message }}</p>
    </div>
</template>

<script setup>
const props = defineProps({
    message: "string",
});
</script>