import { getDb, isDbConfigured } from '@/lib/db';

export interface LessonProgress {
	userId: string;
	courseSlug: string;
	lessonSlug: string;
	lastPositionSeconds: number;
	updatedAt: Date;
}

interface ProgressRow {
	user_id: string;
	course_slug: string;
	lesson_slug: string;
	last_position_seconds: number;
	updated_at: string;
}

function rowToProgress(row: ProgressRow): LessonProgress {
	return {
		userId: row.user_id,
		courseSlug: row.course_slug,
		lessonSlug: row.lesson_slug,
		lastPositionSeconds: row.last_position_seconds,
		updatedAt: new Date(row.updated_at),
	};
}

export async function recordLessonView(
	userId: string,
	courseSlug: string,
	lessonSlug: string,
): Promise<void> {
	if (!isDbConfigured()) return;

	const db = getDb();
	await db.execute({
		sql: `INSERT INTO lesson_progress (user_id, course_slug, lesson_slug, last_position_seconds, updated_at)
		      VALUES (?, ?, ?, 0, datetime('now'))
		      ON CONFLICT(user_id, course_slug, lesson_slug) DO UPDATE SET
		        updated_at = datetime('now')`,
		args: [userId, courseSlug, lessonSlug],
	});
}

export async function getLastViewedLesson(userId: string, courseSlug: string): Promise<string | null> {
	if (!isDbConfigured()) return null;

	const db = getDb();
	const result = await db.execute({
		sql: `SELECT lesson_slug FROM lesson_progress
		      WHERE user_id = ? AND course_slug = ?
		      ORDER BY updated_at DESC LIMIT 1`,
		args: [userId, courseSlug],
	});

	const row = result.rows[0] as { lesson_slug: string } | undefined;
	return row?.lesson_slug ?? null;
}

export async function listCompletedLessons(userId: string, courseSlug: string): Promise<string[]> {
	if (!isDbConfigured()) return [];

	const db = getDb();
	const result = await db.execute({
		sql: `SELECT lesson_slug FROM lesson_completions
		      WHERE user_id = ? AND course_slug = ?
		      ORDER BY completed_at ASC`,
		args: [userId, courseSlug],
	});

	return (result.rows as { lesson_slug: string }[]).map((row) => row.lesson_slug);
}

export async function markLessonComplete(
	userId: string,
	courseSlug: string,
	lessonSlug: string,
): Promise<void> {
	if (!isDbConfigured()) return;

	const db = getDb();
	await db.execute({
		sql: `INSERT INTO lesson_completions (user_id, course_slug, lesson_slug, completed_at)
		      VALUES (?, ?, ?, datetime('now'))
		      ON CONFLICT(user_id, course_slug, lesson_slug) DO NOTHING`,
		args: [userId, courseSlug, lessonSlug],
	});
}

export async function getLessonProgress(
	userId: string,
	courseSlug: string,
	lessonSlug: string,
): Promise<LessonProgress | null> {
	if (!isDbConfigured()) return null;

	const db = getDb();
	const result = await db.execute({
		sql: `SELECT user_id, course_slug, lesson_slug, last_position_seconds, updated_at
		      FROM lesson_progress
		      WHERE user_id = ? AND course_slug = ? AND lesson_slug = ? LIMIT 1`,
		args: [userId, courseSlug, lessonSlug],
	});

	const row = result.rows[0] as ProgressRow | undefined;
	return row ? rowToProgress(row) : null;
}
