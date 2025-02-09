<script setup>
import { inject } from 'vue';

const keycloak = inject('keycloak');
</script>

<template>
  <div class="flex p-2 bg-green-700">
    <div class="flex flex-1 text-left items-center">
      <RouterLink to="/" class="text-gray-200 text-xl p-1">Home</RouterLink>
    </div>
    <h1 class="text-gray-200 text-2xl font-bold">Tiptap Example</h1>
    <div class="flex-1 text-right">
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
</style>
