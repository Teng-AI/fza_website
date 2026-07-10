// Post-build checks: run `npm run build && npm run verify`.
// 1. No Webflow/CDN references remain in dist.
// 2. Every internal link and image path resolves to a file in dist.
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const DIST = 'dist';
const FORBIDDEN = ['website-files.com', 'uploads-ssl.webflow.com', 'd3e54v103j8qbb.cloudfront.net', 'fonts.googleapis.com', 'fonts.gstatic.com'];

if (!existsSync(DIST)) {
  console.error('dist/ not found. Run `npm run build` first.');
  process.exit(1);
}

const htmlFiles = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (extname(p) === '.html') htmlFiles.push(p);
  }
})(DIST);

let errors = 0;

function resolvable(path) {
  const clean = path.split('#')[0].split('?')[0];
  if (clean === '' || clean === '/') return true;
  const candidates = [
    join(DIST, clean),
    join(DIST, clean, 'index.html'),
    join(DIST, `${clean.replace(/\/$/, '')}.html`),
    join(DIST, decodeURIComponent(clean)),
  ];
  return candidates.some((c) => existsSync(c));
}

for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');

  for (const bad of FORBIDDEN) {
    if (html.includes(bad)) {
      console.error(`FORBIDDEN REF: ${bad} in ${file}`);
      errors++;
    }
  }

  const refs = [
    ...html.matchAll(/(?:href|src)="([^"]+)"/g),
    ...html.matchAll(/url\('([^']+)'\)/g),
  ].map((m) => m[1]);

  for (const ref of refs) {
    if (/^(https?:|mailto:|#|data:)/.test(ref)) continue;
    if (!resolvable(ref)) {
      console.error(`BROKEN: ${ref} in ${file}`);
      errors++;
    }
  }
}

console.log(`Checked ${htmlFiles.length} pages.`);
if (errors) {
  console.error(`${errors} problem(s) found.`);
  process.exit(1);
}
console.log('All internal links resolve; no Webflow CDN references.');
