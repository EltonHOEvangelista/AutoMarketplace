import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Default output directory for production build
    emptyOutDir: true, // Ensures the dist directory is cleaned before each build
  },
})
