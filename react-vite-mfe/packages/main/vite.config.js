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
      remotes: {
        remote_app: 'http://localhost:8080/remoteEntry.js'
      },
      shared: {
        react: {
          singleton: true,
          // requiredVersion: pkg.dependencies.react,
          // version: '16.13.1',
        },
        'react-dom': {
          singleton: true,
          // requiredVersion: pkg.dependencies['react-dom'],
        }
      }
    })
  ],
})