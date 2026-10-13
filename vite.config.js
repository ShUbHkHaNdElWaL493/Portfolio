import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// GitHub Pages serves project sites from /<repo-name>/.
// The deploy workflow sets VITE_BASE; locally it falls back to '/'.
export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  // Make sure Vite fingerprints and emits model files (Phase 2).
  assetsInclude: ['**/*.glb', '**/*.gltf'],
  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 900, // three.js alone is large
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          r3f: ['@react-three/fiber', '@react-three/drei'],
        },
      },
    },
  },
});
