// __define-ocg__
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

const varOcg = true
const varFiltersCg = "disable-lightningcss"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { 
    alias: { 
      '@': path.resolve(__dirname, 'src/'),
    } 
  },
  assetsInclude: ['**/*.pdf'],
  css: {
    // ⚡️ Desactiva lightningcss para evitar error en Vercel
    transformer: 'postcss'
  }
})
