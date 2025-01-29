import defaults from './defaults';

const config = {
  HOCUSPOCUS_WS_BASE_URL: import.meta.env.VITE_HOCUSPOCUS_WS_BASE_URL || defaults.HOCUSPOCUS_WS_BASE_URL,
};

export default config;
