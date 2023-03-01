import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import removeAttributes from './plugin';

export default defineConfig(({ mode, command }) => {
  console.log(process.env.NODE_ENV)
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
      removeAttributes(),
    ],
  })
});