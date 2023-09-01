<template>
  <div
    class="fixed w-screen h-screen backdrop-blur-md z-50 flex justify-center items-center"
    v-if="!accessControl"
  >
    <div class="join join-vertical max-w-xs py-10 border-2 bg-white fixed w-full flex px-4">
      <div class="w-full flex join-item flex-col px-4">
        <p class="text-lg font-bold pb-10" :class="isClientBlocked ? ' 0' : ''">
          This site is under development and not open to the public. <br />Do you have a access-key
          type in below.
        </p>
        <input
          v-model="enteredPassword"
          type="password"
          class="bg-gray-200 rounded-none join-item input-ghost input focus:outline-none text-center"
          :class="isClientBlocked ? ' btn-disabled' : ''"
        />
        <button
          @click="checkPassword"
          class="btn btn-primary join-item"
          :class="isClientBlocked ? 'btn-disabled' : ''"
        >
          enter
        </button>
      </div>

      <div class="w-full flex justify-center join-item px-4 py-4 text-center">
        <div v-if="isPasswordCorrect">
          <p>Password is correct!</p>
        </div>
        <div v-else-if="passwordChecked">
          <div v-if="isClientBlocked">
            <p>You are blocked from making further attempts.</p>
          </div>
          <p v-else>Password is incorrect. <br />You have {{ attemptCounter + 1 }} tries left.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  //imports
  import { ref } from 'vue';

  //refs
  const isPasswordCorrect = ref(false);
  const passwordChecked = ref(false);

  const enteredPassword = ref('');
  const attemptCounter = ref(2);
  const isClientBlocked = ref(localStorage.getItem('isBlocked') === 'true');
  const accessControl = ref(localStorage.getItem('accessControl') === 'true');

  //consts
  //pwassword
  // Fetch environment variables using import.meta
  const knownPassword = import.meta.env.VITE_APP_PASSWORD;
  const key = import.meta.env.VITE_APP_KEY;

  //functions
  const hashPassword = async (password) => {
    const cryptoKey = await window.crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(key),
      { name: 'HMAC', hash: 'SHA-256' },
      false,
      ['sign']
    );

    const signature = await window.crypto.subtle.sign(
      'HMAC',
      cryptoKey,
      new TextEncoder().encode(password)
    );

    const hashArray = new Uint8Array(signature);
    return Array.from(hashArray)
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  };

  //check password
  const checkPassword = async () => {
    // if counter is 0 or less, set localStorage to true and isClientBlocked true
    if (attemptCounter.value <= 0) {
      localStorage.setItem('isBlocked', 'true');
      isClientBlocked.value = true;

      return; // Early exit if the client becomes blocked
    }
    // isClientBlocked true?
    if (isClientBlocked.value) {
      return; // Early exit if the client is already blocked
    }

    // crypt correct password
    const knownHash = await hashPassword(knownPassword);
    // crypt user input
    const enteredHash = await hashPassword(enteredPassword.value);

    //password is checked and is correct
    if (knownHash === enteredHash) {
      isPasswordCorrect.value = true;
      accessControl.value = true;
      localStorage.setItem('accessControl', true);
    }
    passwordChecked.value = true;
    if (isPasswordCorrect.value) {
    }
    //password checked and it is not correct

    if (!isPasswordCorrect.value) {
      attemptCounter.value = attemptCounter.value - 1;
    }
  };
  const initialize = () => {
    isClientBlocked.value = localStorage.getItem('isBlocked') === 'true';
  };
  initialize(); // Call this to initialize the state based on localStorage
  //end
</script>
