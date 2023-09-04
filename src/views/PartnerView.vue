<template>
  <div class="px-2 pt-2"><TitleComponent :title="'Partners'" /></div>
  <div class="border-2 border-color3 mx-10 p-4 mt-4 h-72">
    <img :src="$t('partners.partner1.logo')" class="w-full h-40" />
    <SubTitleComponent :subTitle="$t('partners.partner1.title')" class="py-2 line-clamp-1" />
    <button
      class="btn btn-primary w-full btn-sm align-bottom"
      @click="dialogStore.openPartnerDialog('partner1')"
    >
      read more
    </button>
  </div>
  <div class="border-2 border-color3 mx-10 p-4 mt-4 h-72">
    <img :src="$t('partners.partner2.logo')" class="w-full h-40" />
    <SubTitleComponent :subTitle="$t('partners.partner2.title')" class="py-2" />
    <button
      class="btn btn-primary w-full btn-sm"
      @click="dialogStore.openPartnerDialog('partner2')"
    >
      read more
    </button>
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
