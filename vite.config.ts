import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // If we are running 'npm run dev', use '/', otherwise use '/screener/'
    base: command === 'serve' ? '/' : '/screener/',
  }
})
