<template>
  <!-- background click, close dialog -->
  <div class="fixed w-full h-screen z-20">
    <div class="fixed w-full h-screen z-0" @click="dialogStore.closeDialog()"></div>
    <!-- wrapper on top of clickable background -->
    <div class="z-20 h-screen flex items-center">
      <!-- content -->

      <!-- Section: Design Block -->
      <div class="mx-4 z-20 absolute rounded-lg bg-white border-2 border-color3 py-5">
        <div class="flex flex-wrap items-center">
          <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
            <!-- Text inside here -->
            <div class="px-4 md:px-12">
              <CancelButton class="absolute right-0 top-0" />
              <TitleComponent :title="'TITLE here'" class="pt-10" />
              <CommonTextComponent
                class="py-10"
                :text="'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum maxime voluptas ipsam aliquam itaque cupiditate provident architecto expedita harum culpa odit, inventore rem molestias laborum repudiandae corporis pariatur quo eius iste! Quaerat, assumenda voluptates! Molestias, recusandae? Maxime fuga omnis ducimus.'"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  //imports
  import { useDialogStore } from '../stores/DialogStore';
  import CancelButton from './buttons/CancelButton.vue';

  //text components
  import TitleComponent from '@/components/TitleComponent.vue';
  import SubTitleComponent from '@/components/SubTitleComponent.vue';
  import CommonTextComponent from '@/components/CommonTextComponent.vue';

  //consts
  const dialogStore = useDialogStore();

  //refs

  //end
</script>
