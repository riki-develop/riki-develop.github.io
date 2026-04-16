import { resolve } from 'path'
import { defineConfig } from 'vite'
import sass from 'sass'

export default defineConfig({
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, 'src/index.html')
    }
  },
  server: {
    port: 5173,
    open: true
  }
})
