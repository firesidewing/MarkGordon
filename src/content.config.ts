import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const sharedFields = {
	title: z.string(),
	slug: z.string(),
	date: z.coerce.date(),
	draft: z.boolean().default(false),
	videoId: z.string().optional(),
	excerpt: z.string().optional(),
};

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
	schema: z.object({
		...sharedFields,
		categories: z.array(z.string()).optional(),
		tags: z.array(z.string()).optional(),
	}),
});

const pages = defineCollection({
	loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
	schema: z.object({
		...sharedFields,
		homepage: z.boolean().default(false),
	}),
});

export const collections = { blog, pages };
