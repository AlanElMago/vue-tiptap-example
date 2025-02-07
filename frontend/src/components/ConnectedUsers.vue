<script setup>
import { inject, ref } from 'vue';

const { provider } = defineProps(['provider']);
const keycloak = inject('keycloak');
const connectedUsers = ref([keycloak.tokenParsed.name]);

provider.setAwarenessField('user', {
  name: keycloak.tokenParsed.name,
});

provider.on('awarenessChange', ({ states }) => {
  connectedUsers.value = [];
  states.forEach(state => connectedUsers.value.push(state.user.name));    
});
</script>

<template>
  <div>
    <h3>Connected Users</h3>
    <li v-for="user in connectedUsers">
      {{ user }}
    </li>
  </div>
</template>

<style scoped>
@reference '../main.css';

h3 {
  @apply text-xl;
}
</style>
