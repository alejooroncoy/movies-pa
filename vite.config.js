import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { config } from 'dotenv';

config();

export default defineConfig({
  define: {
    process: {
      env: process.env,
    }
  },
  server: {
    watch: {
      usePolling: true,
    }
  },
  plugins: [react()]
})
