import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://smarticksolutions.co.uk',
  redirects: {
    '/blog/mobile-native-vs-crossplatform': '/blog/mobile-native-vs-cross-platform',
  },
  integrations: [
    tailwind(),
    sitemap(),
  ],
});
