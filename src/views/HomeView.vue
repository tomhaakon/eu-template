<template>
  <main class="pt-4 bg-gray-200">
    <div class="absolute px-2">
      <img src="@/assets/home-picture.jpg" class="object-cover h-screen opacity-80 rounded-md" />
    </div>
    <div class="relative pt-24 px-4">
      <TitleComponent :title="$t('website.title')" class="text-shadow text-white" />
    </div>
    <div class="relative pt-24 px-4">
      <SubTitleComponent
        :subTitle="$t('pages.home.sub-headline')"
        class="text-white text-shadow px-6"
      />
      <p class="text-xl text-white font-bold max-w-prose"></p>
    </div>
    <div class="py-24 relative px-4 space-y-5">
      <div class="pt-20">
        <RouterLink to="/about">
          <NewsComponent
            :title="$t('pages.home.about-project')"
            :subTitle="$t('pages.home.about-project.sub')"
        /></RouterLink>
      </div>
      <div>
        <RouterLink to="/about">
          <NewsComponent
            :title="$t('pages.home.available-sources')"
            :subTitle="$t('pages.home.available-sources.sub')"
          />
        </RouterLink>
      </div>
      <div>
        <RouterLink to="/partners">
          <NewsComponent
            :title="$t('pages.home.partners')"
            :subTitle="$t('pages.home.partners.sub')"
          />
        </RouterLink>
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
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 1);
  }
</style>
