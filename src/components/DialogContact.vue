<template>
  <TitleComponent :title="'Contact us'" class="text-color3" />
  <form class="py-5 join-vertical join input-group">
    <Divider class="bg-color3" />
    <!--Name input-->
    <input type="text" id="username" placeholder="Name" class="input join-item input-bordered" />
    <!--Email input-->
    <input
      type="email"
      id="exampleInput8"
      placeholder="Email address"
      class="input join-item input-bordered"
    />

    <!--Message textarea-->
    <textarea
      id="textarea"
      rows="10"
      placeholder="Message"
      class="input join-item input-bordered min-h-16 pt-2"
    ></textarea>

    <!--Submit button-->
    <button type="submit" class="btn bg-color3 join-item input-bordered">Send</button>
  </form>
</template>
<script setup>
  //imports
  import { useDialogStore } from '../stores/DialogStore';
  import BackgroundBlur from './BackgroundBlur.vue';
  import Divider from './Divider.vue';

  //text components
  import TitleComponent from '@/components/TitleComponent.vue';
  import SubTitleComponent from '@/components/SubTitleComponent.vue';

  import CancelButton from './buttons/CancelButton.vue';
  //consts
  const dialogStore = useDialogStore();

  //refs

  //end
</script>
