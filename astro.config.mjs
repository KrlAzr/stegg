import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
// import netlify from '@astrojs/netlify'; // <--- 1. Comment out or remove this import

export default defineConfig({
  site: 'https://stegg.dev',

  // 2. Keep Static Mode
  output: 'static',

  // 3. Comment out the adapter.
  // Netlify automatically hosts static sites (the 'dist' folder) without this.
  // removing this stops the "Edge Functions" download error.
  // adapter: netlify(), 

  integrations: [
    tailwind(), 
    sitemap()
  ],
});