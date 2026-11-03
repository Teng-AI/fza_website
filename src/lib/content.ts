import { getCollection } from 'astro:content';

// Community projects in display order; the tiles and /culture's structured data share it.
export const getProjects = async () =>
  (await getCollection('projects')).sort((a, b) => a.data.order - b.data.order);

// Titles may carry HTML entities for display (&mdash;, &rsquo;). Plain-text contexts such as
// JSON-LD need the characters themselves.
const named: Record<string, string> = {
  amp: '&', quot: '"', apos: "'", nbsp: ' ', mdash: '—', ndash: '–',
  lsquo: '‘', rsquo: '’', ldquo: '“', rdquo: '”', hellip: '…',
};

export const decodeEntities = (s: string) =>
  s.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, code: string) => {
    if (code[0] === '#') {
      const n = code[1].toLowerCase() === 'x' ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return String.fromCodePoint(n);
    }
    return named[code.toLowerCase()] ?? match;
  });
