<template>
  <div class="px-4 max-h-[600px] overflow-auto" v-if="dialogStore.activeDialog === 'partner'">
    <div v-if="dialogStore.showPartner === 'partner1'">
      <TitleComponent :title="$t('partners.partner1.title')" class="text-color3 px-4" />
      <img :src="$t('partners.partner1.logo')" class="w-full h-40 my-6 px-4" />
      <CommonTextComponent :text="$t('partners.partner1.about')" class="px-4" />
    </div>
    <div v-if="dialogStore.showPartner === 'partner2'">
      <TitleComponent :title="$t('partners.partner2.title')" class="text-color3 px-4" />
      <img :src="$t('partners.partner2.logo')" class="w-full h-40 my-6 px-4" />
      <CommonTextComponent :text="$t('partners.partner2.about')" class="px-4" />
    </div>
  </div>
</template>
<script setup>
  //imports
  import { useDialogStore } from '../stores/DialogStore';

  //text components
  import TitleComponent from '@/components/TitleComponent.vue';
  import SubTitleComponent from '@/components/SubTitleComponent.vue';

  import CommonTextComponent from './CommonTextComponent.vue';
  //consts
  const dialogStore = useDialogStore();

  //refs

  //end
</script>
