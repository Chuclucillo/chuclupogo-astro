// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://chuclupogo.dedomingo.net',
  integrations: [tailwind(), sitemap(), react()],
  output: 'server',
  adapter: cloudflare(),
  prefetch: {
    defaultStrategy: 'viewport',
    prefetchAll: true
  }
});