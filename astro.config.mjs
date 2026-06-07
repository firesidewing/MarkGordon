// @ts-check
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.markgordon.ca',
	adapter: vercel(),
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
	},
	integrations: [
		svelte(),
		sitemap({
			filter: (page) => {
				const path = new URL(page).pathname;
				const excluded = [
					'/online-courses/',
					'/courses/',
					'/registration/',
					'/registration-success/',
					'/profile/',
					'/reset-password/',
				];
				if (excluded.includes(path)) return false;
				if (path.startsWith('/courses/')) return false;
				return true;
			},
		}),
	],
});
