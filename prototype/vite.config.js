import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/reservation-ui/modern/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'reservation-ui/modern',
    emptyOutDir: true,
    assetsInlineLimit: 0,
    cssCodeSplit: false,
    rollupOptions: {
      input: 'reservation-react/src/main.tsx',
      output: {
        entryFileNames: 'shaga-app.js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: asset => asset.names.some(name => name.endsWith('.css')) ? 'shaga-app.css' : 'assets/[name]-[hash][extname]',
      },
    },
  },
});
