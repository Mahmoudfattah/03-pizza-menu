import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: replace usepopcorn with your repo name
export default defineConfig({
  plugins: [react()],
  base: '/03-pizza-menu/',
})
