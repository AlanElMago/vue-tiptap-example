import defaults from './defaults';

const config = {
  HOCUSPOCUS_WS_IP: import.meta.env.VITE_HOCUSPOCUS_WS_IP || defaults.HOCUSPOCUS_WS_IP,
};

export default config;
