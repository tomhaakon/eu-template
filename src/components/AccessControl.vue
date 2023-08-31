<template>
  <div class="fixed w-screen h-screen backdrop-blur-md z-50 flex items-center justify-center">
    <div class="flex flex-col px-5 join join-vertical">
      <div class="w-full flex justify-center join-item">
        <p class="font-bold text-3xl">Hello, to view this page you need a password.</p>
      </div>
      <div class="w-full flex justify-center join-item">
        <input
          v-model="enteredPassword"
          placeholder="Enter Password"
          class="join input input-primary"
        />
      </div>
      <div class="w-full flex justify-center join-item">
        <button @click="checkPassword" class="btn btn-primary">Check Password</button>
      </div>
      <div class="w-full flex justify-center join-item">
        <p v-if="isPasswordCorrect">Password is correct!</p>
        <p v-else-if="passwordChecked">Password is incorrect.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const enteredPassword = ref('');
  const isPasswordCorrect = ref(false);
  const passwordChecked = ref(false);

  const knownPassword = 'asd123'; // This should be hashed and stored securely
  const key = 'your-secret-key'; // This should be secure and ideally server-side

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

  const checkPassword = async () => {
    const knownHash = await hashPassword(knownPassword);
    const enteredHash = await hashPassword(enteredPassword.value);
    isPasswordCorrect.value = knownHash === enteredHash;
    passwordChecked.value = true;
  };
</script>
