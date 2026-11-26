import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const logs = defineCollection({
  loader: glob({ base: './src/content/logs', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),

    // experimenting = still learning it
    // learned       = got it working, understand the basics
    // evergreen     = mastered / known by heart
    status: z.enum(['experimenting', 'learned', 'evergreen']).default('experimenting'),

    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(), // set when you revisit a note
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),
    draft: z.boolean().default(false),       // hide unfinished notes
  }),
});

export const collections = { logs };