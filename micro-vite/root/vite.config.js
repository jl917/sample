import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";
import pkg from './package.json'

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
      federation({
        remotes: {
          remote_app: 'http://127.0.0.1:8080/assets/remoteEntry.js'
        },
        shared: {
          react: {},
          'react-dom': {
            requiredVersion: pkg.dependencies['react-dom'],
            import: false
          }
        }
      })
    ],
  })
});