<template>
  <main class="relative mx-auto container bg-slate-200 px-4 h-full">
    <TitleComponent :title="$t('pages.about.content-title')" class="py-5" />
    <CommonTextComponent :text="$t('pages.about.content')" />
  </main>
</template>

<script setup>
  //text components
  import TitleComponent from '@/components/TitleComponent.vue';
  import SubTitleComponent from '@/components/SubTitleComponent.vue';
  import CommonTextComponent from '@/components/CommonTextComponent.vue';
</script>
