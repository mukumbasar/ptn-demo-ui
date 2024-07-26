import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ptn-demo-ui/',
  plugins: [react()],
})
