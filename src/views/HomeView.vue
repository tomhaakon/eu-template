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
      <div class="space-y-4 pt-20 relative">
        <NewsComponent :title="'About the project'" :subTitle="'info more jep'" />
        <NewsComponent :title="'Available resoruces'" :subTitle="'click ehre for wtt'" />
        <NewsComponent :title="'Partners'" :subTitle="'blabla yepyep skksuu mnajjj mjau'" />
      </div>
    </div>
  </main>
</template>
<script setup>
  //imports
  import { useDialogStore } from '../stores/DialogStore';
  import { ref } from 'vue';

  //text components
  import TitleComponent from '../components/TitleComponent.vue';
  import SubTitleComponent from '../components/SubTitleComponent.vue';

  //components
  import NewsComponent from '../components/NewsComponent.vue';

  //consts
  const dialogStore = useDialogStore();

  //end
</script>
<style scoped>
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  }
</style>
