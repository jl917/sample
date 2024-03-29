import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode, command }) => {
  return defineConfig({
    root: './src',
    build: {
      outDir: '../dist',
      emptyOutDir: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      react(),
    ],

    server: {
      proxy: {
        '/api-backoffice': {
          target: 'https://backoffice-gateway-dev.wemakeprice.com',
          rewrite: (path) => path.replace(/^\/api-backoffice/, '')
        },
      }
    },
  })
});