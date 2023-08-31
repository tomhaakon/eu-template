<template>
  <div class="justify-center flex">
    <form class="join join-vertical w-11/12">
      <TitleComponent :title="'Login'" class="pb-5 text-color3" />
      <Divider class="bg-color3" />
      <input
        class="input input-ghost join-item input-bordered"
        type="username"
        placeholder="Username"
      />
      <input
        class="input input-ghost join-item input-bordered"
        type="password"
        placeholder="Password"
      />

      <button class="btn bg-color3 join-item input-bordered">Login</button>
    </form>
  </div>
</template>
<script setup>
  //imports
  import { useDialogStore } from '../stores/DialogStore';

  //consts
  const dialogStore = useDialogStore();
  import TitleComponent from '@/components/TitleComponent.vue';
  import Divider from './Divider.vue';

  //refs

  //end
</script>
