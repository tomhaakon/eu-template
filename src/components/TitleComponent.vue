<!-- TitleComponent.vue -->
<template>
  <p class="text-2xl font-bold text-color2">{{ title }}</p>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: 'no-title',
      required: true,
    },
  });
</script>
