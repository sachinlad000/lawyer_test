// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // IMPORTANT: Update this to your actual domain before deployment
  site: 'https://yourdomain.com',
  
  output: 'static',
  
  vite: {
    plugins: [tailwindcss()]
  },
  
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  
  // Image optimization
  image: {
    domains: [],
  },
  
  // Build settings
  build: {
    inlineStylesheets: 'auto',
  },
});