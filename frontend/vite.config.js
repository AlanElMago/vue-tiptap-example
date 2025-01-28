import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      vue(),
      vueDevTools(),
      tailwindcss(),
    ],
    preview: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: env.ALLOWED_HOSTS?.split(', ') || ['localhost'],
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: env.ALLOWED_HOSTS?.split(', ') || ['localhost'],
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  };
});
