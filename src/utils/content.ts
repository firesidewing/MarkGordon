import { getCollection, type CollectionEntry } from 'astro:content';

export function formatDate(date: Date): string {
	return date.toLocaleDateString('en-CA', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
}

export function postUrl(slug: string): string {
	return `/${slug}/`;
}

export function categoryUrl(name: string): string {
	return `/blog/category/${encodeURIComponent(name)}/`;
}

/** Page slugs handled by dedicated routes, not [slug].astro */
export const RESERVED_PAGE_SLUGS = new Set([
	'home2',
	'blog',
	'vlogs',
	'blind-spot-assessment',
	'newsletter-signup',
	'book-now',
	'relationship-matters',
	'faith-community-packages',
]);

export async function getPublishedPosts(): Promise<CollectionEntry<'blog'>[]> {
	const posts = await getCollection('blog');
	return posts
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export async function getCategoryCounts(): Promise<{ name: string; count: number }[]> {
	const posts = await getPublishedPosts();
	const counts = new Map<string, number>();

	for (const post of posts) {
		for (const category of post.data.categories ?? []) {
			counts.set(category, (counts.get(category) ?? 0) + 1);
		}
	}

	return [...counts.entries()]
		.map(([name, count]) => ({ name, count }))
		.sort((a, b) => a.name.localeCompare(b.name));
}

export function getRelatedPosts(
	post: CollectionEntry<'blog'>,
	allPosts: CollectionEntry<'blog'>[],
	limit = 3,
): CollectionEntry<'blog'>[] {
	const categories = new Set(post.data.categories ?? []);

	return allPosts
		.filter((candidate) => candidate.id !== post.id)
		.map((candidate) => {
			const shared = (candidate.data.categories ?? []).filter((category) =>
				categories.has(category),
			).length;
			return { candidate, shared };
		})
		.filter(({ shared }) => shared > 0)
		.sort((a, b) => {
			if (b.shared !== a.shared) return b.shared - a.shared;
			return b.candidate.data.date.getTime() - a.candidate.data.date.getTime();
		})
		.slice(0, limit)
		.map(({ candidate }) => candidate);
}
