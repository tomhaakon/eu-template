<template>
  <!-- Section: Design Block -->
  <div class="w-full z-30 fixed">
    <!-- news dialog -->
    <div
      class="mx-4 bg-white py-10 rounded-lg"
      :class="dialogStore.activeDialog === 'news' ? 'border-2 border-color3' : ''"
    >
      <!-- Text inside here -->
      <CancelButton class="absolute right-4 top-2" @click="dialogStore.closeDialog()" />
      <DialogNews v-if="dialogStore.activeDialog === 'news'" />
      <DialogContact v-if="dialogStore.activeDialog === 'contact'" />
      <DialogLogin v-if="dialogStore.activeDialog === 'login'" />
      <DialogPartners v-if="dialogStore.activeDialog === 'partner'" />
    </div>
  </div>
</template>

<script setup>
  //imports
  import { useDialogStore } from '../stores/DialogStore';

  //components

  import DialogNews from './DialogNews.vue';
  import DialogLogin from './DialogLogin.vue';
  import BackgroundBlur from './BackgroundBlur.vue';
  import CancelButton from './buttons/CancelButton.vue';
  import TitleComponent from '@/components/TitleComponent.vue';
  import SubTitleComponent from '@/components/SubTitleComponent.vue';
  import CommonTextComponent from '@/components/CommonTextComponent.vue';
  import DialogContact from './DialogContact.vue';
  import DialogPartners from './DialogPartners.vue';

  //consts
  const dialogStore = useDialogStore();

  //refs

  //end
</script>
