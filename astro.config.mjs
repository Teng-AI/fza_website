import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Meta-refresh fallback pages so old conference URLs work on any host.
  // Cloudflare Pages also gets server-side 301s via public/_redirects.
  redirects: {
    '/talktoomuch2024': '/conference/2024',
    '/talktoomuch2023': '/conference/2023',
  },
});
