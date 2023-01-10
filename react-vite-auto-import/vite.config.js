import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';

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
      AutoImport({
        include: [/\.[tj]sx?$/],
        imports: [
          'react'
        ],
        defaultExportByFilename: true,
        dirs: [
          './src',
          // './hooks',
          // './composables' // only root modules
          // './composables/**', // all nested modules
          // ...
        ],
        dts: true,
        vueTemplate: false,
      
        // Custom resolvers, compatible with `unplugin-vue-components`
        // see https://github.com/antfu/unplugin-auto-import/pull/23/
        resolvers: [],      
        eslintrc: {
          enabled: false, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
      })
    ],
  })
});