<template>
  <div class="justify-center flex">
    <form class="join join-vertical w-11/12">
      <TitleComponent :title="'Login'" class="pb-5" />
      <input class="input input-ghost join-item" type="username" placeholder="Username" />
      <input class="input input-ghost join-item" type="password" placeholder="Password" />

      <button class="btn bg-color3 join-item">Login</button>
    </form>
  </div>
</template>
<script setup>
  //imports
  import { useDialogStore } from '../stores/DialogStore';

  //consts
  const dialogStore = useDialogStore();
  import TitleComponent from '@/components/TitleComponent.vue';

  //refs

  //end
</script>
