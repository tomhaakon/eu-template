<template>
  <div class="relative inline-block text-left">
    <button @click="isOpen = !isOpen" class="btn"></button>
    <div
      v-if="isOpen"
      class="origin-top-right absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      <div class="py-1">
        <a @click="setLanguage('en')" class="block px-4 py-2 text-sm cursor-pointer">
          <img src="../assets/icon/english.png" class="w-8 inline-block mr-2" />
        </a>
        <a @click="setLanguage('bg')" class="block px-4 py-2 text-sm cursor-pointer">
          <img src="../assets/icon/bulgaria.png" class="w-8 inline-block mr-2" />
        </a>
        <a @click="setLanguage('no')" class="block px-4 py-2 text-sm cursor-pointer">
          <img src="../assets/icon/norway.png" class="w-8 inline-block mr-2" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const isOpen = ref(false);
  const setLanguage = (lang) => {
    console.log(`Language set to ${lang}`);
    // Your logic to set the language
  };
</script>

<style scoped>
  /* Add any additional styles if needed */
</style>
