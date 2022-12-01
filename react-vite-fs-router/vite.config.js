import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import replace from '@rollup/plugin-replace';
import glob from 'glob';

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
      replace({
        preventAssignment: true,
        'window.__ROUTES__': JSON.stringify(getRoutes()),
      }),
    ],
    server: {
      port: 3001
    }
  })
});

// pages 내 .page.tsx 기반 라우팅
function getRoutes () {
  const files = glob.sync("./src/pages/**/*.page.jsx");

  const routes = files.reduce((routes, _pagePath) => {
    const pagePath = _pagePath.replace('./src/pages/', '')
    let entry = pagePath.replace('./pages', '');

    const endFixPage = '.page.jsx';
    if (entry.endsWith(endFixPage)) {
      entry = entry.slice(0, -9);
    }
    routes[entry] = pagePath.replace('.jsx','')

    const endFixIndex = '/index';
    if (entry.endsWith(endFixIndex)) {
      entry = entry.slice(0, -6);
    }

    routes[entry] = pagePath.replace('.jsx','')
    return routes;
  }, {});
  return routes;
}