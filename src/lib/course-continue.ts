import {
	courseHref,
	getSortedLessons,
	lessonHref,
	type Course,
} from '@/lib/courses';

/** Resume link for account UI; loads Turso only when called (not via the catalog module). */
export async function getContinueLessonHref(userId: string, course: Course): Promise<string> {
	const { getLastViewedLesson } = await import('@/lib/progress');
	const lastViewed = await getLastViewedLesson(userId, course.id);
	const sorted = getSortedLessons(course);

	if (lastViewed && sorted.some((lesson) => lesson.slug === lastViewed)) {
		return lessonHref(course.id, lastViewed);
	}

	const first = sorted[0];
	return first ? lessonHref(course.id, first.slug) : courseHref(course.id);
}
