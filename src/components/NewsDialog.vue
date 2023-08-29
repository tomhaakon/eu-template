<template>
  <!-- background click, close dialog -->
  <div class="fixed bg-red-400 w-full h-full z-10 px-4" @click="dialogStore.closeDialog()"></div>
  <!-- wrapper on top of clickable background -->
  <div class="bg-blue-400">
    <div class="z-20 fixed bg-purple-400 h-full">
      <!-- content -->

      <!-- Section: Design Block -->
      <div class="right-6 fixed">
        <button class="btn btn-lg btn-ghost" @click="dialogStore.closeDialog()">x</button>
      </div>
      <div
        class="top-auto bottom-auto block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
      >
        <div class="flex flex-wrap items-center">
          <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
            <div class="px-6 py-12 md:px-12">
              <h2 class="mb-4 text-2xl font-bold">What's the secret of the great taste?</h2>
              <p
                class="mb-6 flex items-center font-bold uppercase text-danger dark:text-danger-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="mr-2 h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                  />
                </svg>
                Hot news
              </p>
              <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum maxime voluptas
                ipsam aliquam itaque cupiditate provident architecto expedita harum culpa odit,
                inventore rem molestias laborum repudiandae corporis pariatur quo eius iste!
                Quaerat, assumenda voluptates! Molestias, recusandae? Maxime fuga omnis ducimus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Section: Design Block -->
  </div>
</template>

<script setup>
  //imports
  import { useDialogStore } from '../stores/DialogStore';

  //consts
  const dialogStore = useDialogStore();

  //refs

  //end
</script>
