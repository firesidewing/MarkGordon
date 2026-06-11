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

	await syncPurchasedEnrollments(userId);

	const enrollment = await getEnrollment(userId, courseSlug);
	if (!enrollment) {
		return { allowed: false, reason: 'no_enrollment' };
	}

	if (!isEnrollmentActive(enrollment)) {
		return { allowed: false, reason: 'expired', enrollment };
	}

	return { allowed: true, enrollment };
}
