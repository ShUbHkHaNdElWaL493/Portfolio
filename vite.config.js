// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  // Vite can tree-shake Three.js quite well with this hint
  optimizeDeps: {
    include: ['three', 'gsap'],
  },
  resolve: {
    alias: {
      // Maps '@' to the root directory
      '@': path.resolve(__dirname, './'),
    },
  },
});
