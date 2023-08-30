<!-- TitleComponent.vue -->
<template>
  <p class="text-xl text-color4">{{ subTitle }}</p>
</template>

<script setup>
  const props = defineProps({
    subTitle: {
      type: String,
      default: 'no subtitle',
      required: true,
    },
  });
</script>
