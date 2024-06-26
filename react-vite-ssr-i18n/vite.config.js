import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin'

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
      react(), ssr({ prerender: true }),
    ],
  })
});