import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// One HTML entry per page; each builds to the same path under dist/,
// so figurewright/index.html is served at /figurewright/.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: fileURLToPath(new URL('./index.html', import.meta.url)),
        figurewright: fileURLToPath(new URL('./figurewright/index.html', import.meta.url)),
      },
    },
  },
})
