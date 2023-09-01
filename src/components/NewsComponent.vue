<!-- TitleComponent.vue -->
<template>
  <div
    class="border-color3 cursor-pointer font-NunitoSans border-4 shadow-xl space-y-1 rounded-md w-full p-5 bg-white"
  >
    <SubTitleComponent :subTitle="props.title" />
    <CommonTextComponent :text="props.subTitle" />
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
  //props
  const props = defineProps({
    title: {
      type: String,
      default: 'no-title',
      required: true,
    },
    subTitle: {
      type: String,
      default: 'no-content',
      required: true,
    },
  });
</script>
