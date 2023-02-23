import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { absoluteImports } from './vite-plugins/absolute-imports.js';
import { themeCSS } from './vite-plugins/theme-css';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
  },
  plugins: [themeCSS(), absoluteImports(), svelte()],
});
