import { isBillableCourse } from '@/config/billing';
import { userHasActivePlanForCourse } from '@/lib/clerk-billing';
import { isDbConfigured } from '@/lib/db';
import {
	getEnrollment,
	isEnrollmentActive,
	syncPurchasedEnrollments,
	type Enrollment,
} from '@/lib/enrollments';

export type AccessDenialReason = 'not_signed_in' | 'no_purchase' | 'no_enrollment' | 'expired';

export interface CourseAccessResult {
	allowed: boolean;
	reason?: AccessDenialReason;
	enrollment?: Enrollment;
}

/**
 * Lesson access: Turso enrollment is the hot-path source of truth.
 * Clerk billing sync runs only when Turso has no row (missed webhook recovery).
 * When Turso is unset, fall back to Clerk Billing plan check.
 */
export async function checkCourseAccess(
	userId: string | null | undefined,
	courseSlug: string,
): Promise<CourseAccessResult> {
	if (!userId) {
		return { allowed: false, reason: 'not_signed_in' };
	}

	if (!isBillableCourse(courseSlug)) {
		return { allowed: false, reason: 'no_purchase' };
	}

	if (!isDbConfigured()) {
		const hasPlan = await userHasActivePlanForCourse(userId, courseSlug);
		return hasPlan ? { allowed: true } : { allowed: false, reason: 'no_purchase' };
	}

	let enrollment = await getEnrollment(userId, courseSlug);

	// Miss path only — avoid Clerk Billing on every lesson view.
	if (!enrollment) {
		await syncPurchasedEnrollments(userId);
		enrollment = await getEnrollment(userId, courseSlug);
	}

	if (!enrollment) {
		return { allowed: false, reason: 'no_enrollment' };
	}

	if (!isEnrollmentActive(enrollment)) {
		return { allowed: false, reason: 'expired', enrollment };
	}

	return { allowed: true, enrollment };
}
