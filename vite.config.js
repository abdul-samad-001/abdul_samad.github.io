import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/abdul_samad.github.io/',
  server: {
    host: true,
    allowedHosts: true
  }
})