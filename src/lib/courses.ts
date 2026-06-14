import { getCollection, type CollectionEntry } from 'astro:content';
import { getLastViewedLesson } from '@/lib/progress';

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

export function getLowestCoursePrice(courses: Course[]): number {
	if (courses.length === 0) return 0;
	return Math.min(...courses.map((course) => course.data.price));
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

export function getSortedLessons(course: Course) {
	return [...course.data.lessons].sort((a, b) => a.order - b.order);
}

export function getLesson(course: Course, lessonSlug: string) {
	return course.data.lessons.find((lesson) => lesson.slug === lessonSlug);
}

export function lessonHref(courseSlug: string, lessonSlug: string): string {
	return `/courses/${courseSlug}/${lessonSlug}/`;
}

export function getAdjacentLessons(course: Course, lessonSlug: string) {
	const sorted = getSortedLessons(course);
	const index = sorted.findIndex((lesson) => lesson.slug === lessonSlug);
	return {
		prev: index > 0 ? sorted[index - 1] : undefined,
		next: index >= 0 && index < sorted.length - 1 ? sorted[index + 1] : undefined,
		index,
		total: sorted.length,
	};
}

export async function getContinueLessonHref(userId: string, course: Course): Promise<string> {
	const lastViewed = await getLastViewedLesson(userId, course.id);
	const sorted = getSortedLessons(course);

	if (lastViewed && sorted.some((lesson) => lesson.slug === lastViewed)) {
		return lessonHref(course.id, lastViewed);
	}

	const first = sorted[0];
	return first ? lessonHref(course.id, first.slug) : courseHref(course.id);
}
