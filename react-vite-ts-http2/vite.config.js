import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import fs from 'fs';

export default defineConfig(({ mode, command }) => {
  return defineConfig({
    root: './src',
    build: {
      outDir: '../dist',
      emptyOutDir: true,
    },
    server: {
      port: 3000,
      https: {
        cert: fs.readFileSync('./localhost.crt'),
        key: fs.readFileSync('./localhost.key'),
      }
    },
    plugins: [
      react(),
    ],
  })
});