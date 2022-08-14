import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  plugins: [
    react(),
    federation({
      name: 'common-btn',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button.jsx',
        './Button1': './src/Button1.jsx'
      },
      shared: ['react', 'react-dom']
    })
  ],
})