<template>
  <div
    class="fixed h-screen w-full backdrop-blur-[2px] z-10 bg-opacity-20 bg-black"
    @click="dialogStore.closeDialog()"
  ></div>
</template>

<script setup>
  import { useDialogStore } from '../stores/DialogStore';

  //import
  const dialogStore = useDialogStore();
</script>
