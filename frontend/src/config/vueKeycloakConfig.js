import config from './config';

const vueKeycloakConfig = {
  url: config.KC_URL,
  realm: config.KC_REALM,
  clientId: config.KC_CLIENT_ID,
};

export default vueKeycloakConfig;
