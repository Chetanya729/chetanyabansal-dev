import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // './' keeps asset paths relative, so the build works both at a domain
  // root (chetanya.co.in) and in a subfolder (github.io/repo-name).
  base: './',
  plugins: [react(), tailwindcss()],
});
