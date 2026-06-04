// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Vite can tree-shake Three.js quite well with this hint
  optimizeDeps: {
    include: ['three', 'gsap'],
  },
});
