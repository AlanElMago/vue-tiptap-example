import defaults from './defaults';

const config = {
  ALLOWED_HOSTS: import.meta.env.VITE_ALLOWED_HOSTS?.split(', ') || defaults.ALLOWED_HOSTS,
  HOCUSPOCUS_WS_IP: import.meta.env.VITE_HOCUSPOCUS_WS_IP || defaults.HOCUSPOCUS_WS_IP,
};

export default config;
