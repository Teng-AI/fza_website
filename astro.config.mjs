import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Canonical production domain: used for canonical URLs, og tags, and the
  // sitemap. Cloudflare's _redirects handles the old conference URLs
  // server-side; the meta-refresh stubs below are a fallback for other hosts.
  site: 'https://www.fuzhouamerica.org',
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/talktoomuch'),
    }),
  ],
  redirects: {
    '/talktoomuch2024': '/conference/2024',
    '/talktoomuch2023': '/conference/2023',
  },
});
