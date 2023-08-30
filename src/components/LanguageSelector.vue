<template>
  <div class="pr-2">
    <p class="text-right hidden">{{ $t('vertical-menu.select-language') }}</p>
  </div>
  <div class="flex space-x-4 justify-end pr-2">
    <div :class="activeLanguage == 'en' ? 'border-b-4  border-color3 ' : ' '" class="py-1">
      <img
        src="../assets/icon/english.png"
        class="w-8 h-5 cursor-pointer"
        @click="changeLanguage('en')"
      />
    </div>
    <div class="py-1" :class="activeLanguage == 'bg' ? 'border-b-4  border-color3' : ' '">
      <img
        src="../assets/icon/bulgaria.png"
        :class="activeLanguage == 'bg' ? ' opacity-100' : ' '"
        class="w-8 h-5 cursor-pointer"
        @click="changeLanguage('bg')"
      />
    </div>
    <div class="py-1" :class="activeLanguage == 'no' ? 'border-b-4  border-color3' : ' '">
      <img
        src="../assets/icon/norway.png"
        :class="activeLanguage == 'no' ? ' opacity-100' : ' '"
        class="w-8 h-5 cursor-pointer"
        @click="changeLanguage('no')"
      />
    </div>
  </div>
</template>

<script setup>
  // import //
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  // const //
  const i18n = useI18n({ useScope: 'global' });
  const storedLanguage = localStorage.getItem('userLanguage');

  // ref //
  const activeLanguage = ref();

  // Functions //

  //change language, set i18n locale and localStorage
  const changeLanguage = (newLang) => {
    i18n.locale.value = newLang;
    localStorage.setItem('userLanguage', newLang);
    activeLanguage.value = newLang;
  };

  //if localStorage(userLanguage) is empty, set to i18n default
  if (!storedLanguage) {
    localStorage.setItem('userLanguage', i18n.locale.value);
    activeLanguage.value = i18n.locale.value;
  }
  activeLanguage.value = i18n.locale.value;
  // end //
</script>
