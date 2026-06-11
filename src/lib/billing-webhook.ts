import { grantEnrollmentForCourse } from '@/lib/enrollments';
import { isCoursePlanSlug } from '@/config/billing';

interface BillingPayer {
	user_id?: string | null;
	organization_id?: string | null;
}

interface BillingPlan {
	slug?: string | null;
}

interface BillingSubscriptionItem {
	plan?: BillingPlan | null;
}

interface SubscriptionEventData {
	id: string;
	payer?: BillingPayer | null;
	items?: BillingSubscriptionItem[] | null;
}

interface SubscriptionItemEventData {
	payer?: BillingPayer | null;
	plan?: BillingPlan | null;
}

async function grantAccessForPlan(userId: string, planSlug: string, subscriptionId: string): Promise<void> {
	if (!isCoursePlanSlug(planSlug)) return;
	await grantEnrollmentForCourse(userId, planSlug, subscriptionId);
}

export async function handleBillingWebhookEvent(type: string, data: unknown): Promise<void> {
	if (type === 'subscription.created' || type === 'subscription.active' || type === 'subscription.updated') {
		const payload = data as SubscriptionEventData;
		const userId = payload.payer?.user_id;
		if (!userId) return;

		for (const item of payload.items ?? []) {
			const planSlug = item.plan?.slug;
			if (planSlug) {
				await grantAccessForPlan(userId, planSlug, payload.id);
			}
		}
		return;
	}

	if (type === 'subscriptionItem.active' || type === 'subscriptionItem.updated') {
		const payload = data as SubscriptionItemEventData;
		const userId = payload.payer?.user_id;
		const planSlug = payload.plan?.slug;
		if (!userId || !planSlug) return;

		await grantAccessForPlan(userId, planSlug, `item_${planSlug}`);
	}
}
