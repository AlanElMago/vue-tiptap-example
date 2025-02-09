import './main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueKeycloak from '@dsb-norge/vue-keycloak-js';
import PrimeVue from 'primevue/config';

import App from './App.vue';
import router from './router';
import vueKeycloakConfig from './config/vueKeycloakConfig';

const app = createApp(App);

app.use(VueKeycloak, {
  config: vueKeycloakConfig,
  init: { onLoad: 'login-required' },
  onReady: (keycloak) => {
    app.provide('keycloak', keycloak);

    app.use(router);
    app.use(createPinia());
    app.use(PrimeVue);

    app.mount('#app');
  },
});
