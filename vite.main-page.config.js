import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = typeof __dirname !== 'undefined'
  ? __dirname
  : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: 'https://storage.yandexcloud.net/jvo-sites/main-page/',
  root: dirname,
  build: {
    outDir: 'dist-landing/main-page',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(dirname, 'main-page.html'),
      output: {
        entryFileNames: 'assets/main-page.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/main-page.css';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
