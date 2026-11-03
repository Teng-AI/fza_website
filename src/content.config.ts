import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { themeKeys } from './data/site';

const person = z.object({
  name: z.string(),
  pronouns: z.string().optional(),
  // One entry per display line under the name (title, affiliation, school, ...)
  lines: z.array(z.string()).default([]),
  image: z.string().optional(),
  link: z.string().optional(),
});

const team = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    board: z.enum(['executive', 'advisory']),
    image: z.string(),
    linkedin: z.string().optional(),
    order: z.number().default(99),
  }),
});

const media = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/media' }),
  schema: z
    .object({
      outlet: z.string(),
      title: z.string(),
      url: z.string(),
      order: z.number().default(99),
      // Reading-room fields (2026): articles group by theme on /culture;
      // `featured` (1-6) picks and orders the homepage press section.
      author: z.string().optional(),
      year: z.number().optional(),
      theme: z.enum(themeKeys).optional(),
      kind: z.enum(['article', 'book', 'film']).default('article'),
      publisher: z.string().optional(),
      featured: z.number().optional(),
      // One line in FZA's words on what the piece covers; shown under the title on /culture.
      summary: z.string().optional(),
    })
    // /culture lists articles by theme, so an article without one would silently vanish.
    .refine((m) => m.kind !== 'article' || m.theme !== undefined, {
      message: 'Articles need a theme (see readingThemes in src/data/site.ts)',
      path: ['theme'],
    })
    // Books and films print "Book by <author>, <year>".
    .refine((m) => m.kind === 'article' || (m.author !== undefined && m.year !== undefined), {
      message: 'Books and films need an author and a year',
      path: ['author'],
    }),
});

// Projects the community makes and FZA champions: the "From our community" tiles
// on the homepage and /culture.
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    name: z.string(),
    url: z.string(),
    desc: z.string(),
    // Display line under the tile, e.g. "By Allen Cao & Jess Eng"
    credit: z.string(),
    // The makers' names, for structured data
    creators: z.array(z.string()).default([]),
    order: z.number().default(99),
  }),
});

// One entry per conference year. Every section is optional so future years
// can include only what they need; the page template skips missing sections.
const conferences = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/conferences' }),
  schema: z.object({
    year: z.number(),
    name: z.string(),
    // Optional: recent editions' themes land when confirmed
    theme: z.string().optional(),
    presenterLine: z.string(),
    dateDisplay: z.string(),
    venueShort: z.string(),
    heroImage: z.string().optional(),
    // Shown where "Buy Tickets" buttons used to be. Omit for a future
    // (upcoming) conference and set ticketUrl instead.
    pastEventNote: z.string().optional(),
    ticketUrl: z.string().optional(),
    whyAttend: z
      .object({
        intro: z.string(),
        cards: z.array(
          z.object({ title: z.string(), text: z.string(), image: z.string().optional() })
        ),
      })
      .optional(),
    recap: z
      .object({
        title: z.string(),
        videoId: z.string().optional(),
        photos: z.array(z.string()).default([]),
      })
      .optional(),
    community: z
      .object({
        text: z.string(),
        photos: z.array(z.string()).default([]),
        videoIds: z.array(z.string()).default([]),
      })
      .optional(),
    scheduleImage: z.string().optional(),
    agenda: z
      .object({
        date: z.string(),
        time: z.string(),
        items: z.array(z.object({ title: z.string(), who: z.string() })),
      })
      .optional(),
    speakers: z.object({ intro: z.string().optional(), people: z.array(person), note: z.string().optional() }).optional(),
    mcs: z.object({ intro: z.string().optional(), people: z.array(person) }).optional(),
    conferenceTeam: z.object({ intro: z.string().optional(), people: z.array(person) }).optional(),
    venue: z
      .object({ text: z.string(), image: z.string().optional(), links: z.array(z.object({ label: z.string(), url: z.string() })).default([]) })
      .optional(),
    sponsorsImage: z.string().optional(),
    sponsorsNote: z.string().optional(),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

export const collections = { team, media, projects, conferences };
