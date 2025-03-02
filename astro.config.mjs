// @ts-check
import { defineConfig, envField } from 'astro/config';

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
  },

  env: {
    schema: {
      XATA_API_KEY: envField.string({ context: "server", access: "secret" }),
      XATA_BRANCH: envField.string({ context: "server", access: "secret" }),
      DATABASE_URL: envField.string({ context: "server", access: "secret" }),
    }
  },
});