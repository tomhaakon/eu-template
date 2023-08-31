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
        <NewsComponent
          :title="$t('pages.home.about-project')"
          :subTitle="$t('pages.home.about-project.sub')"
        />
        <NewsComponent
          :title="$t('pages.home.available-sources')"
          :subTitle="$t('pages.home.available-sources.sub')"
        />
        <NewsComponent
          :title="$t('pages.home.partners')"
          :subTitle="$t('pages.home.partners.sub')"
        />
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
