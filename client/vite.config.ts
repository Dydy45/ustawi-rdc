import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
<<<<<<< HEAD
  base: "/ustawi-rdc/", // Base path for deployment
=======
  base: '/ustawi-rdc/',
>>>>>>> dc491e5cee258fe5a2adc3f8c32097914e28458b
})
