<template>
  <!-- background click, close dialog -->
  <div class="fixed w-full h-screen z-20">
    <div class="fixed w-full h-sceen z-0" @click="dialogStore.closeDialog()"></div>
    <!-- wrapper on top of clickable background -->
    <div class="z-20 h-screen flex items-center">
      <!-- content -->

      <div class="mx-4 w-full max-w-md rounded-lg bg-white">
        <div class="flex-row flex">
          <div class="w-full p-4"><TitleComponent :title="'Contact us'" /></div>
          <div class="text-right"><CancelButton class="" /></div>
        </div>

        <form class="p-4">
          <!--Name input-->
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="text"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
              id="exampleInput7"
              placeholder="Name"
            />
            <label
              for="exampleInput7"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-color2 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
              >Name
            </label>
          </div>

          <!--Email input-->
          <div class="relative mb-6" data-te-input-wrapper-init>
            <input
              type="email"
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
              id="exampleInput8"
              placeholder="Email address"
            />
            <label
              for="exampleInput8"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-color2 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
              >Email address
            </label>
          </div>

          <!--Message textarea-->
          <div class="relative mb-6" data-te-input-wrapper-init>
            <textarea
              class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
              id="exampleFormControlTextarea13"
              rows="3"
              placeholder="Message"
            ></textarea>
            <label
              for="exampleFormControlTextarea13"
              class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-color2 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
              >Message
            </label>
          </div>

          <!--Checkbox-->
          <div class="mb-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">
            <input
              class="relative float-left -ml-[1.5rem] mr-[6px] h-[1.125rem] w-[1.125rem]"
              type="checkbox"
              value=""
              id="exampleCheck10"
            />
            <label class="inline-block pl-[0.15rem] hover:cursor-pointer" for="exampleCheck10">
              Send me a copy of this message
            </label>
          </div>

          <!--Submit button-->
          <button
            type="submit"
            class="inline-block w-full rounded bg-color3 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  //imports
  import { useDialogStore } from '../stores/DialogStore';

  //text components
  import TitleComponent from '@/components/TitleComponent.vue';
  import SubTitleComponent from '@/components/SubTitleComponent.vue';

  import CancelButton from './buttons/CancelButton.vue';
  //consts
  const dialogStore = useDialogStore();

  //refs

  //end
</script>
