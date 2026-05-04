// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://theenglishhacker.com',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) => ![
        'https://theenglishhacker.com/dev/',
        'https://theenglishhacker.com/unlock/',
        'https://theenglishhacker.com/thanks/',
      ].includes(page),
    }),
  ],
});