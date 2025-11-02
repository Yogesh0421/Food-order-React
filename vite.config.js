import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/

// This is for deploying on GitHub Pages
// export default defineConfig({
//   plugins: [react()],
//   base:"/Food-order-React",
// })

// This is for deploying on other platforms like Netlify, Vercel, etc.
export default defineConfig({
  plugins: [react()],
  base:"./",
})
