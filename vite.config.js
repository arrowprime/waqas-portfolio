import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/waqas-portfolio/',
  plugins: [react()],
});
