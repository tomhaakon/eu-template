<template>
  <div class="border-2 border-color3 mx-4 p-4 mt-4">
    <SubTitleComponent :subTitle="'Partner1'" />
    <button class="btn btn-primary">read more</button>
  </div>
</template>

<script setup>
  //import
  import { useDialogStore } from '../stores/DialogStore';
  import TitleComponent from '../components/TitleComponent.vue';
  import SubTitleComponent from '../components/SubTitleComponent.vue';
  import CommonTextComponent from '../components/CommonTextComponent.vue';

  //const
  const dialogStore = useDialogStore();
</script>
