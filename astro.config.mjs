import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

export default defineConfig({
  // 1. Define the production site URL (Crucial for SEO)
  site: 'https://stegg.dev', 
  
  // 2. Add the sitemap integration
  integrations: [tailwind(), sitemap(), partytown()],
  
  // 3. Ensure trailing slashes are consistent (Best practice: 'always' or 'never'. 'always' is safer for Netlify)
  trailingSlash: 'always',
});