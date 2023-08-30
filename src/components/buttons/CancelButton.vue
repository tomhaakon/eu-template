<template>
  <button class="btn btn-ghost btn-square" @click="dialogStore.closeDialog()">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" class="w-8 h-8 fill-color2">
      <path
        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
      />
    </svg>
  </button>
</template>

<script setup>
  import { useDialogStore } from '../../stores/DialogStore';

  const dialogStore = useDialogStore();
</script>
