import type { ImageMetadata } from 'astro';

import aboutHero from '@/assets/content/about-mark/boardwalk-bridge-close-up-421759.jpg';
import aboutPortrait from '@/assets/content/about-mark/Mark-36-e1569198052878-750x1024.jpg';
import contactPortrait from '@/assets/content/contact/Mark-36-e1569198052878-750x1024.jpg';
export const pageHeroImages: Partial<Record<string, ImageMetadata>> = {
	'about-mark': aboutHero,
};

export const pageFeaturedImages: Partial<Record<string, ImageMetadata>> = {
	'about-mark': aboutPortrait,
	contact: contactPortrait,
};
