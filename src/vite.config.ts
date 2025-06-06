
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    host: "::"
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Base path for GitHub Pages deployment - this ensures assets are loaded correctly
  base: './',
})
