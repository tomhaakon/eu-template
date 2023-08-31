<template>
  <main class="mx-auto bg-slate-200 px-4">
    <TitleComponent :title="$t('pages.about.content-title')" class="pt-4" />
    <CommonTextComponent :text="$t('pages.about.content')" class="py-10 px-4" />
  </main>
</template>

<script setup>
  //text components
  import TitleComponent from '@/components/TitleComponent.vue';
  import SubTitleComponent from '@/components/SubTitleComponent.vue';
  import CommonTextComponent from '@/components/CommonTextComponent.vue';
</script>
