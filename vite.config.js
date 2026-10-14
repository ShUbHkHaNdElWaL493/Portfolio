import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves project sites from /<repo-name>/.
// The deploy workflow sets VITE_BASE; locally it falls back to '/'.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 900, // three.js alone is large
    // Put three.js in its own file so it can be cached separately from our code.
    rollupOptions: { output: { manualChunks: { three: ['three'] } } },
  },
});
