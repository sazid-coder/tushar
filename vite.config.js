import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs' // if using PostCSS,
    // server.hmr.overlay:server.hmr.overlay
  },
  server:{
    hmr:{
      overlay: true
    }
  }
})