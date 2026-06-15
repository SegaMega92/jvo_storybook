import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = typeof __dirname !== 'undefined'
  ? __dirname
  : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: 'https://storage.yandexcloud.net/jvo-sites/agent_communcation/',
  root: dirname,
  build: {
    outDir: 'dist-landing/communications',
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(dirname, 'landing.html'),
      output: {
        entryFileNames: 'assets/landing.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/landing.css';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
