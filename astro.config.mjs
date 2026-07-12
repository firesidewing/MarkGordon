// @ts-check
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'astro/config';
import clerk from '@clerk/astro';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';
import vercel from '@astrojs/vercel';
import { cacheVercel } from '@astrojs/vercel/cache';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.markgordon.ca',
	output: 'server',
	adapter: vercel(),
	cache: {
		provider: cacheVercel(),
	},
	image: {
		remotePatterns: [{ protocol: 'https', hostname: 'i.ytimg.com' }],
	},
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
	},
	integrations: [
		clerk(),
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
					'/sign-in/',
					'/sign-up/',
					'/account/',
				];
				if (excluded.includes(path)) return false;
				if (path.startsWith('/courses/')) return false;
				if (path.startsWith('/account/')) return false;
				return true;
			},
		}),
	],
});
