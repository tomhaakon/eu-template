<template>
  <p class="font-NunitoSans text-color4">{{ text }}</p>
</template>

<script setup>
  const props = defineProps({
    text: {
      type: String,
      default: 'no text',
      required: true,
    },
  });
</script>
