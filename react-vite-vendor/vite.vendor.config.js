import { defineConfig } from 'vite';
import path, { resolve } from 'path';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: './src',
  publicDir: false,
  build: {
    lib: {
      entry: resolve(__dirname, 'src/vendor.js'),
      name: 'vendorV1',
      fileName: 'vendor-v1',
      formats: ['iife', 'umd'],
    },
    outDir: './public',
    emptyOutDir: false,
  },
  
  // plugins: [
  //   // react(),
  //   createExternal({
  //     externals: {
  //       react: 'vendorV1.React',
  //       'react-dom': 'ReactDom',
  //       antd: 'antd',
  //     },
  //   })
  // ],
})