<template>
  <main class="mx-auto bg-slate-200 px-4">
    <!-- about -->
    <TitleComponent :title="$t('pages.about.content-title')" class="pt-4 px-2" />
    <CommonTextComponent :text="$t('pages.about.content')" class="pt-8 px-4" />
    <Divider class="bg-color3 my-4" />
    <!-- goal -->
    <TitleComponent :title="'Goal of the project'" class="pt-8 px-2" />
    <CommonTextComponent :text="$t('pages.about.goal')" class="pt-8 px-4" />
    <Divider class="bg-color3 my-4" />
    <!-- who the project is for -->
    <TitleComponent :title="'Who the project is for?'" class="pt-8 px-2" />
    <CommonTextComponent :text="$t('pages.about.project-is-for')" class="pt-8 px-4" />
    <Divider class="bg-color3 my-4" />
    <!-- keywords -->
    <CommonTextComponent :text="'keywords'" class="font-bold pt-4 px-4" />
    <CommonTextComponent :text="$t('pages.about.related-words')" class="pb-5 px-4" />
    <Divider class="bg-color3 my-4" />
  </main>
</template>

<script setup>
  //text components
  import TitleComponent from '@/components/TitleComponent.vue';
  import SubTitleComponent from '@/components/SubTitleComponent.vue';
  import CommonTextComponent from '@/components/CommonTextComponent.vue';
  import Divider from '../components/Divider.vue';
</script>
