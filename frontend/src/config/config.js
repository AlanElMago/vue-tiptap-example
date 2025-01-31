import defaults from './defaults';

const config = {
  HOCUSPOCUS_WS_BASE_URL: import.meta.env.VITE_HOCUSPOCUS_WS_BASE_URL || defaults.HOCUSPOCUS_WS_BASE_URL,

  KC_URL: import.meta.env.VITE_KC_URL || defaults.KC_URL,
  KC_REALM: 'vue-tiptap-example',
  KC_CLIENT_ID: 'vue-client',
};

export default config;
