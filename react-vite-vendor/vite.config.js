import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode, command }) => {
  return defineConfig({
    root: './src',
    build: {
      outDir: '../dist',
      emptyOutDir: true,
      rollupOptions: {
        external: ['react', 'react-dom', 'antd'],
        output: {
          globals: {
            react: 'vendorV1.React',
            'react-dom': 'vendorV1.ReactDOM',
            antd: 'vendorV1.antd'
          }
        }
      }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    plugins: [
      react(),
    ],
  })
});