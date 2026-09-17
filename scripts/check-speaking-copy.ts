#!/usr/bin/env bun

import { Glob } from 'bun';

const banned = [
	'Book Discovery Call',
	'Book a Discovery Call',
	'Would you like stronger relationships?',
	'Take the Free Test Now',
	'Get Started Now!',
	'—',
];

const glob = new Glob('src/{pages,components,data,layouts,config}/**/*.{astro,ts,svelte,tsx,js}');
const hits: string[] = [];

for await (const file of glob.scan('.')) {
	const text = await Bun.file(file).text();
	for (const phrase of banned) {
		if (text.includes(phrase)) {
			hits.push(`${file}: ${phrase}`);
		}
	}
}

if (hits.length > 0) {
	console.error('Retired copy still in live source:');
	for (const hit of hits) console.error(`  ${hit}`);
	process.exit(1);
}

console.log('Speaking-first copy check passed.');
