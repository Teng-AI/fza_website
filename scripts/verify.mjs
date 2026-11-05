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

  // Link-preview images are absolute site URLs in meta tags; check they resolve too.
  for (const m of html.matchAll(/(?:og|twitter):image" content="https:\/\/www\.fuzhouamerica\.org([^"]+)"/g)) {
    refs.push(m[1]);
  }

  for (const ref of refs) {
    if (/^(https?:|mailto:|#|data:)/.test(ref)) continue;
    if (!resolvable(ref)) {
      console.error(`BROKEN: ${ref} in ${file}`);
      errors++;
    }
  }
}

// 3. Every reading-room entry renders on /culture (an article with no matching theme would
//    otherwise drop off the page without an error).
const mediaCount = readdirSync('src/content/media').filter((n) => n.endsWith('.md')).length;
const culturePath = join(DIST, 'culture', 'index.html');
const renderedCount = existsSync(culturePath)
  ? (readFileSync(culturePath, 'utf8').match(/class="press-item[ "]/g) ?? []).length
  : 0;
if (renderedCount !== mediaCount) {
  console.error(`READING ROOM: ${mediaCount} media files but ${renderedCount} entries on /culture`);
  errors++;
}

// 4. The homepage shows only the first HOME_TILES community projects plus a link to the full
//    list on /culture, and /culture shows every project.
const HOME_TILES = 4;
const projectCount = readdirSync('src/content/projects').filter((n) => n.endsWith('.md')).length;
const tilesIn = (page) => {
  const p = join(DIST, page);
  return existsSync(p) ? (readFileSync(p, 'utf8').match(/class="tile"/g) ?? []).length : 0;
};
const homeHtml = existsSync(join(DIST, 'index.html')) ? readFileSync(join(DIST, 'index.html'), 'utf8') : '';
const homeTiles = tilesIn('index.html');
const cultureTiles = tilesIn(join('culture', 'index.html'));
if (homeTiles !== Math.min(HOME_TILES, projectCount)) {
  console.error(`COMMUNITY: homepage shows ${homeTiles} project tiles, expected ${Math.min(HOME_TILES, projectCount)}`);
  errors++;
}
if (projectCount > HOME_TILES && !homeHtml.includes('href="/culture#community"')) {
  console.error('COMMUNITY: homepage has no link to /culture#community');
  errors++;
}
const cultureHtml = existsSync(join(DIST, 'culture', 'index.html')) ? readFileSync(join(DIST, 'culture', 'index.html'), 'utf8') : '';
if (!cultureHtml.includes('id="community"')) {
  console.error('COMMUNITY: /culture has no id="community" anchor for the homepage link');
  errors++;
}
if (cultureTiles !== projectCount) {
  console.error(`COMMUNITY: ${projectCount} project files but ${cultureTiles} tiles on /culture`);
  errors++;
}

console.log(`Checked ${htmlFiles.length} pages.`);
if (errors) {
  console.error(`${errors} problem(s) found.`);
  process.exit(1);
}
console.log('All internal links resolve; no Webflow CDN references.');
