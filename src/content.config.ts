import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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
  schema: z.object({
    outlet: z.string(),
    title: z.string(),
    url: z.string(),
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
    theme: z.string(),
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

export const collections = { team, media, conferences };
