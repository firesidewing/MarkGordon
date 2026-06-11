import type { AuthObject } from '@clerk/backend';
import { isCoursePlanSlug } from '@/config/billing';
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

export async function checkCourseAccess(
	auth: AuthObject,
	userId: string | null | undefined,
	courseSlug: string,
): Promise<CourseAccessResult> {
	if (!userId) {
		return { allowed: false, reason: 'not_signed_in' };
	}

	if (!isCoursePlanSlug(courseSlug)) {
		return { allowed: false, reason: 'no_purchase' };
	}

	if (!auth.has({ plan: courseSlug })) {
		return { allowed: false, reason: 'no_purchase' };
	}

	await syncPurchasedEnrollments(auth, userId);

	const enrollment = await getEnrollment(userId, courseSlug);
	if (!enrollment) {
		return { allowed: false, reason: 'no_enrollment' };
	}

	if (!isEnrollmentActive(enrollment)) {
		return { allowed: false, reason: 'expired', enrollment };
	}

	return { allowed: true, enrollment };
}
