import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    repo: z.url(),
    live: z.string().default(''),
    tech: z.array(z.string()),
    stars: z.number().int().min(0).default(0),
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    date: z.coerce.date(),
    // Añadimos la propiedad draft como un booleano opcional o requerido
    draft: z.boolean().optional().default(false), 
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().default(''),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    // Añadimos la propiedad draft como un booleano opcional o requerido
    draft: z.boolean().optional().default(false), 
  }),
});

export const collections = { projects, blog };
