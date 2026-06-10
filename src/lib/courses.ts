import { getCollection, type CollectionEntry } from 'astro:content';

export type Course = CollectionEntry<'courses'>;

export async function getAllCourses(): Promise<Course[]> {
	return (await getCollection('courses')).sort((a, b) => {
		if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
		return a.data.title.localeCompare(b.data.title);
	});
}

export async function getCourse(slug: string): Promise<Course | undefined> {
	const courses = await getAllCourses();
	return courses.find((course) => course.id === slug);
}

export function formatPrice(price: number): string {
	return `$${price}`;
}

export function courseHref(slug: string): string {
	return `/courses/${slug}/`;
}

export function courseCardFromCourse(course: Course) {
	return {
		title: course.data.title,
		subtitle: course.data.subtitle,
		price: formatPrice(course.data.price),
		bullets: course.data.bullets,
		description: course.data.description,
		href: courseHref(course.id),
		badge: course.data.badge,
		ctaLabel: `Explore ${course.data.title}`,
	};
}

export function miniCourseFromCourse(course: Course) {
	const question =
		course.data.subtitle.endsWith('?') ? course.data.subtitle : `Ready for ${course.data.title}?`;
	return {
		title: course.data.title,
		question,
		body: course.data.description,
		href: courseHref(course.id),
	};
}
