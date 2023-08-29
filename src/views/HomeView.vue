<template>
  <main class="relative mx-auto container bg-slate-200 px-4 h-full">
    <div class="px-4">
      <div class="absolute inset-0 px-4 pt-4">
        <img src="@/assets/home-picture.jpg" class="object-none opacity-80 rounded-lg" />
      </div>
      <div class="relative pt-8">
        <p class="font-NunitoSans text-4xl text-shadow text-white font-bold max-w-prose">
          {{ $t('website.title') }}
        </p>
      </div>
      <div class="relative pt-8">
        <p class="font-NunitoSans text-shadow text-shadow text-xl text-white font-bold max-w-prose">
          {{ $t('pages.home.sub-headline') }}
        </p>
      </div>
      <div class="space-y-5 pt-20 relative">
        <div
          @click="dialogStore.openNewsDialog()"
          class="border-color3 cursor-pointer font-NunitoSans border-2 rounded-md w-full p-8"
        >
          <div><p class="text-2xl font-bold text-color2">About the project</p></div>
          <div><p class="text-color4">content</p></div>
        </div>
        <div
          @click="dialogStore.openNewsDialog()"
          class="border-color3 cursor-pointer font-NunitoSans border-2 rounded-md w-full h-24 p-4"
        >
          <div><p class="text-2xl font-bold text-color2">news2</p></div>
          <div><p class="text-color4">content</p></div>
        </div>
        <div
          @click="dialogStore.openNewsDialog()"
          class="border-color3 cursor-pointer font-NunitoSans border-2 rounded-md w-full h-24 p-4"
        >
          <div><p class="text-2xl font-bold text-color2">news3</p></div>
          <div><p class=" ">content</p></div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
  //imports
  import { useDialogStore } from '../stores/DialogStore';

  //consts
  const dialogStore = useDialogStore();
</script>
<style scoped>
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  }
</style>
