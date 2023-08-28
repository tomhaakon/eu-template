<template>
  <main class="relative mx-auto container bg-slate-100 px-4 h-full">
    <div class="px-4">
      <div class="absolute inset-0 px-4 pt-4">
        <img src="@/assets/home-picture.jpg" class="object-none opacity-50 rounded-xl" />
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
    </div>
  </main>
</template>
<script setup></script>
<style scoped>
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  }
</style>
