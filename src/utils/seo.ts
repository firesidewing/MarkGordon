import { site } from '@/config/site';

export const SITE_URL = 'https://www.markgordon.ca';
export const DEFAULT_OG_IMAGE = '/logo.png';

export function pageTitle(title: string): string {
	return title === site.name ? title : `${title} - ${site.name}`;
}

export function absoluteUrl(path: string): string {
	return new URL(path, SITE_URL).href;
}

export function canonicalFromPath(pathname: string): string {
	const normalized = pathname.endsWith('/') ? pathname : `${pathname}/`;
	return absoluteUrl(normalized === '//' ? '/' : normalized);
}

export function youtubeOgImage(videoId: string): string {
	return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
}
