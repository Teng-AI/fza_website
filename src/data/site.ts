// Facts shown on more than one page. Change a value here and every page follows.

// Community numbers: Home stat band, About page, and meta descriptions.
// Array order is display order; prose looks numbers up by key with stat('members').
// `label` is the short Home caption; `caption` is the longer About caption.
export const stats = [
  { key: 'members', number: '10k+', label: 'Members across all platforms', caption: 'Members across all platforms' },
  { key: 'gathered', number: '2500+', label: 'Gathered through events', caption: 'People gathered through events' },
  { key: 'cities', number: '100+', label: 'Cities represented', caption: 'Cities represented in our community' },
  { key: 'countries', number: '25+', label: 'Countries represented', caption: 'Countries represented in our community' },
] as const;

export const stat = (key: (typeof stats)[number]['key']) => stats.find((s) => s.key === key)!.number;

// Reading-room themes on /culture, in display order. The media schema accepts only these keys,
// so a new theme is one line here.
export const readingThemes = [
  { key: 'history', label: 'History' },
  { key: 'immigration', label: 'Immigration' },
  { key: 'chinatown', label: 'Chinatown' },
  { key: 'food', label: 'Food' },
  { key: 'second-gen', label: 'Second generation' },
] as const;

export type ReadingTheme = (typeof readingThemes)[number]['key'];

export const themeKeys = readingThemes.map((t) => t.key) as [ReadingTheme, ...ReadingTheme[]];
