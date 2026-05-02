import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/abdulsamad.github.io/',
  server: {
    host: true,
    allowedHosts: true
  }
})