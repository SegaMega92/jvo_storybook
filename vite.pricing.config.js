import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = typeof __dirname !== 'undefined'
  ? __dirname
  : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: 'https://storage.yandexcloud.net/jvo-sites/pricing/',
  root: dirname,
  build: {
    outDir: 'dist-landing/pricing',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(dirname, 'pricing.html'),
      output: {
        entryFileNames: 'assets/pricing.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/pricing.css';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
