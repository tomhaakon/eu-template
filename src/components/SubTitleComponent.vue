<!-- TitleComponent.vue -->
<template>
  <p class="font-NunitoSans text-2xl text-color4">{{ subTitle }}</p>
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
