import { getClerkPlanId, getCourseSlugForPlanId, type BillableCourseSlug } from '@/config/billing';
import { getClerkClient, isClerkConfigured } from '@/lib/clerk';

export async function userHasActivePlanForCourse(userId: string, courseSlug: string): Promise<boolean> {
	const planId = getClerkPlanId(courseSlug);
	if (!planId || !isClerkConfigured()) return false;

	const subscription = await getClerkClient().billing.getUserBillingSubscription(userId);
	return subscription.subscriptionItems.some(
		(item) => item.status === 'active' && (item.plan?.id ?? item.planId) === planId,
	);
}

export async function getActiveBillableCourseSlugs(userId: string): Promise<BillableCourseSlug[]> {
	if (!isClerkConfigured()) return [];

	const subscription = await getClerkClient().billing.getUserBillingSubscription(userId);
	const slugs = new Set<BillableCourseSlug>();

	for (const item of subscription.subscriptionItems) {
		if (item.status !== 'active') continue;
		const courseSlug = getCourseSlugForPlanId(item.plan?.id ?? item.planId);
		if (courseSlug) slugs.add(courseSlug);
	}

	return [...slugs];
}
