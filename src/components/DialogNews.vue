<template>
  <div class="px-4 md:px-12">
    <TitleComponent :title="'TITLE here'" class="pt-10" />
    <CommonTextComponent
      class="py-10"
      :text="'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum maxime voluptas ipsam aliquam itaque cupiditate provident architecto expedita harum culpa odit, inventore rem molestias laborum repudiandae corporis pariatur quo eius iste! Quaerat, assumenda voluptates! Molestias, recusandae? Maxime fuga omnis ducimus.'"
    />
  </div>
</template>

<script setup>
  //imports
  import { useDialogStore } from '../stores/DialogStore';
  import TitleComponent from '@/components/TitleComponent.vue';
  import SubTitleComponent from '@/components/SubTitleComponent.vue';
  import CommonTextComponent from '@/components/CommonTextComponent.vue';
  //consts
  const dialogStore = useDialogStore();

  //refs

  //end
</script>
