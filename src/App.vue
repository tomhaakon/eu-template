<template>
  <!-- dialog -->
  <section v-if="dialogStore.activeDialog === 'contactDialog'">
    <ContactDialog />
  </section>
  <section v-if="dialogStore.activeDialog === 'loginDialog'">
    <LoginDialog />
  </section>
  <section v-if="dialogStore.activeDialog === 'newsDialog'">
    <NewsDialog />
  </section>
  <!-- overlay -->
  <div
    v-if="dialogStore.activeDialog !== null"
    class="fixed h-full w-full bg-black z-10 opacity-20"
  ></div>

  <!-- drawer -->
  <div class="drawer" :class="[dialogStore.activeDialog ? 'fixed blur-[1px]' : '']">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" ref="drawerCheckbox" />
    <div class="drawer-content flex flex-col min-h-screen">
      <!-- Navbar -->
      <div class="w-full navbar sticky px-4 py-8">
        <div class="flex-1 px-2 mx-2">
          <RouterLink to="/"> <Logo class="h-14" /></RouterLink>
        </div>
        <!-- Mobile Navbar -->
        <div class="flex-none lg:hidden px-4">
          <!-- Icon: Contact -->
          <div class="cursor-pointer" @click="dialogStore.openContactDialog()">
            <ContactButton />
          </div>
          <!-- Icon: Hamburger -->
          <div>
            <label for="my-drawer-3" class="btn btn-square btn-ghost">
              <HamburgerButton />
            </label>
          </div>
        </div>
        <!-- Desktop Navbar -->
        <div class="flex-none hidden lg:block px-4">
          <ul class="menu menu-horizontal">
            <!-- Navbar desktop links -->
            <li><RouterLink to="/interesting">Interesting</RouterLink></li>
            <li><RouterLink to="/about">About us</RouterLink></li>
            <li><RouterLink to="/partners">Partners</RouterLink></li>
            <li><RouterLink to="/contact">Contact us</RouterLink></li>
            <li><RouterLink to="/contact">Login</RouterLink></li>
          </ul>
        </div>
      </div>
      <!-- Divider in color -->
      <section class="mx-auto w-full px-4">
        <Divider class="bg-color3" />
      </section>
      <!-- Page content here -->

      <!-- routerview -->
      <RouterView />
      <!-- footer -->
      <Footer />
    </div>
    <!-- Drawer links -->
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label>

      <ul class="menu p-4 w-80 min-h-full bg-base-200">
        <RouterLink to="/"> <Logo class="h-14" @click="handleClick()" /></RouterLink>
        <section class="mx-auto w-full px-1 pt-10 pb-5">
          <Divider class="bg-color3" />
        </section>
        <li>
          <RouterLink to="/interesting" @click="handleClick()">
            <SubTitleComponent :subTitle="'Interesting'" />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/about" @click="handleClick()"
            ><SubTitleComponent :subTitle="$t('pages.about')"
          /></RouterLink>
        </li>
        <li>
          <RouterLink to="/partners" @click="handleClick()"
            ><SubTitleComponent :subTitle="$t('pages.partners')" />
          </RouterLink>
        </li>
        <li class="cursor-pointer" @click="handleClick(), dialogStore.openContactDialog()">
          <SubTitleComponent :subTitle="$t('pages.contact')" />
        </li>
        <li class="cursor-pointer" @click="handleClick(), dialogStore.openLoginDialog()">
          <SubTitleComponent :subTitle="$t('pages.login')" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
  //import
  import { RouterLink, RouterView } from 'vue-router';
  import Footer from './components/Footer.vue';
  import { ref } from 'vue';
  import { useDialogStore } from './stores/DialogStore.js';

  //import dialog
  import NewsDialog from './components/NewsDialog.vue';
  import ContactDialog from './components/ContactDialog.vue';
  import LoginDialog from './components/LoginDialog.vue';

  //import buttons logo etc
  import ContactButton from './components/buttons/ContactButton.vue';
  import HamburgerButton from './components/buttons/HamburgerButton.vue';
  import Divider from './components/Divider.vue';
  import Logo from './components/Logo.vue';

  //text components
  import TitleComponent from '@/components/TitleComponent.vue';
  import SubTitleComponent from '@/components/SubTitleComponent.vue';

  //consts
  const dialogStore = useDialogStore();
  //refs
  const drawerCheckbox = ref(null);

  //functions
  const handleClick = () => {
    drawerCheckbox.value.checked = !drawerCheckbox.value.checked;
  };
  //end
</script>
