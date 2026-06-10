import { getDb } from '@/lib/db';

export interface Enrollment {
	userId: string;
	courseSlug: string;
	purchasedAt: Date;
	expiresAt: Date;
	clerkSubscriptionId: string | null;
}

interface EnrollmentRow {
	user_id: string;
	course_slug: string;
	purchased_at: string;
	expires_at: string;
	clerk_subscription_id: string | null;
}

function rowToEnrollment(row: EnrollmentRow): Enrollment {
	return {
		userId: row.user_id,
		courseSlug: row.course_slug,
		purchasedAt: new Date(row.purchased_at),
		expiresAt: new Date(row.expires_at),
		clerkSubscriptionId: row.clerk_subscription_id,
	};
}

export async function getEnrollment(userId: string, courseSlug: string): Promise<Enrollment | null> {
	const db = getDb();
	const result = await db.execute({
		sql: `SELECT user_id, course_slug, purchased_at, expires_at, clerk_subscription_id
		      FROM enrollments WHERE user_id = ? AND course_slug = ? LIMIT 1`,
		args: [userId, courseSlug],
	});

	const row = result.rows[0] as EnrollmentRow | undefined;
	return row ? rowToEnrollment(row) : null;
}

export async function listEnrollments(userId: string): Promise<Enrollment[]> {
	const db = getDb();
	const result = await db.execute({
		sql: `SELECT user_id, course_slug, purchased_at, expires_at, clerk_subscription_id
		      FROM enrollments WHERE user_id = ? ORDER BY expires_at DESC`,
		args: [userId],
	});

	return (result.rows as EnrollmentRow[]).map(rowToEnrollment);
}

export async function upsertEnrollment(input: {
	userId: string;
	courseSlug: string;
	purchasedAt: Date;
	expiresAt: Date;
	clerkSubscriptionId?: string | null;
}): Promise<void> {
	const db = getDb();
	await db.execute({
		sql: `INSERT INTO enrollments (user_id, course_slug, purchased_at, expires_at, clerk_subscription_id)
		      VALUES (?, ?, ?, ?, ?)
		      ON CONFLICT(user_id, course_slug) DO UPDATE SET
		        purchased_at = excluded.purchased_at,
		        expires_at = excluded.expires_at,
		        clerk_subscription_id = COALESCE(excluded.clerk_subscription_id, enrollments.clerk_subscription_id)`,
		args: [
			input.userId,
			input.courseSlug,
			input.purchasedAt.toISOString(),
			input.expiresAt.toISOString(),
			input.clerkSubscriptionId ?? null,
		],
	});
}

export function isEnrollmentActive(enrollment: Enrollment, now = new Date()): boolean {
	return enrollment.expiresAt > now;
}
