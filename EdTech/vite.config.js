import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{port:3000},
  define: {
    'process.env.VITE_BASE_URL': JSON.stringify(import.meta.env.VITE_BASE_URL),
    'process.env.VITE_RAZORPAY_KEY': JSON.stringify(import.meta.env.VITE_ROZARPAY_KEY), 
  },
})
