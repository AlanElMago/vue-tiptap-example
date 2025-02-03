<script setup>
import { inject } from 'vue';

const keycloak = inject('keycloak');
</script>

<template>
  <div id="navbar">
    <h1>Tiptap Example</h1>
    <div id="button-container">
      <button @click="keycloak.logout()">Logout</button>
    </div>
  </div>
</template>

<style scoped>
@reference '../main.css';

button {
  @apply text-gray-200 text-xl p-1;
}

button:hover {
  @apply cursor-pointer;
}

h1 {
  @apply text-gray-200 text-2xl font-bold;
}

#button-container {
  @apply flex-1 text-right;
}

#navbar {
  @apply flex p-2 bg-green-700;
}
</style>
