import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { hostMode } from './scripts/hostMode.ts'

const entry = (path: string) => fileURLToPath(new URL(path, import.meta.url))

// One HTML entry per page; each builds to the same path under dist/,
// so figurewright/index.html is served at /figurewright/. The copied demos in
// public/ get a script entry each, which hostMode adds to their pages.
export default defineConfig({
  plugins: [react(), hostMode({ colorwright: 'colorwright-host', skywright: 'skywright-host' })],
  build: {
    rollupOptions: {
      input: {
        index: entry('./index.html'),
        figurewright: entry('./figurewright/index.html'),
        // Deliberate: dev/wave-patterns.html is not an input. It is a dev
        // preview that `npm run dev` serves from source, and dist/ is what
        // Pages deploys; scripts/check-dist.ts fails a build that has it.
        'colorwright-host': entry('./src/host/colorwright.tsx'),
        'skywright-host': entry('./src/host/skywright.tsx'),
      },
    },
  },
})
