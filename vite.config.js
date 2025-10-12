import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? '/dachshund-landing/' : '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: 'bundle.js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});

