import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/contentree_newbee/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/v1': {
        target: 'https://openapi.naver.com',
        changeOrigin: true,
      },
    },
  },
});
