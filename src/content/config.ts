import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    repo: z.string().url(),
    // 'live' puede ser una cadena vacía si no existe, por lo que no forzamos .url() directamente
    live: z.string().default(''),
    tech: z.array(z.string()),
    stars: z.number().int().min(0).default(0),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    // Coacciona strings en formato de fecha (YYYY-MM-DD) a objetos Date de JS
    date: z.coerce.date(),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection,
};
