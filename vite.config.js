import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh';
import react from '@vitejs/plugin-react'
import pages from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),pages(),reactRefresh(),],
  
})

