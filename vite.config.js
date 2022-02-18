import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {return{
  publicDir: "src/renderer/public",
  build: {
    outDir: "dist/renderer",
  },
  plugins: [
    vue(),
  ],
}})
