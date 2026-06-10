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

const pages = defineCollection({
	loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
	schema: z.object({
		...sharedFields,
		homepage: z.boolean().default(false),
		intro: z.string().optional(),
		heroLayout: z.enum(['centered', 'split']).optional(),
		contentLayout: z.enum(['default', 'image-left']).optional(),
		showHero: z.boolean().optional(),
		showSidebar: z.boolean().optional(),
	}),
});

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
	schema: z.object({
		...sharedFields,
		categories: z.array(z.string()).optional(),
		tags: z.array(z.string()).optional(),
	}),
});

const courseBullet = z.object({
	text: z.string(),
	highlight: z.string().optional(),
});

const courseDownload = z.object({
	label: z.string(),
	url: z.string(),
});

const courseLesson = z.object({
	slug: z.string(),
	title: z.string(),
	order: z.number(),
	body: z.string(),
	videoUrls: z.array(z.string()),
	downloads: z.array(courseDownload),
});

const courses = defineCollection({
	loader: glob({ base: './src/content/courses', pattern: '**/*.json' }),
	schema: z.object({
		slug: z.string(),
		title: z.string(),
		subtitle: z.string(),
		date: z.coerce.date(),
		price: z.number(),
		featured: z.boolean().default(false),
		badge: z.string().optional(),
		accessDays: z.number().default(365),
		coverImage: z.string(),
		description: z.string(),
		bullets: z.array(courseBullet).default([]),
		testimonial: z
			.object({
				quote: z.string(),
				author: z.string(),
			})
			.optional(),
		materials: z.array(courseDownload).default([]),
		lessons: z.array(courseLesson).default([]),
	}),
});

export const collections = { blog, pages, courses };
