import { getCourseSlugForPlan } from '@/config/billing';
import { grantEnrollmentForCourse } from '@/lib/enrollments';

interface BillingPayer {
	user_id?: string | null;
	organization_id?: string | null;
}

interface BillingPlan {
	id?: string | null;
}

interface BillingSubscriptionItem {
	status?: string | null;
	plan?: BillingPlan | null;
	plan_id?: string | null;
}

interface SubscriptionEventData {
	id: string;
	payer?: BillingPayer | null;
	items?: BillingSubscriptionItem[] | null;
}

interface SubscriptionItemEventData {
	id?: string;
	status?: string | null;
	payer?: BillingPayer | null;
	plan?: BillingPlan | null;
	plan_id?: string | null;
}

interface PaymentAttemptEventData {
	id?: string;
	status?: string | null;
	payer?: BillingPayer | null;
	subscription_items?: BillingSubscriptionItem[] | null;
}

function getUserId(payer: BillingPayer | null | undefined): string | null {
	return payer?.user_id ?? null;
}

function isActiveItem(status: string | null | undefined): boolean {
	return status === 'active';
}

async function grantAccessForItem(
	userId: string,
	item: BillingSubscriptionItem | SubscriptionItemEventData,
	subscriptionId: string,
): Promise<void> {
	if (!isActiveItem(item.status)) return;

	const courseSlug = getCourseSlugForPlan(item.plan, item.plan_id);
	if (!courseSlug) {
		console.warn('Clerk billing webhook: unmapped plan ID', {
			planId: item.plan?.id ?? item.plan_id,
		});
		return;
	}

	const result = await grantEnrollmentForCourse(userId, courseSlug, subscriptionId);
	if (!result) {
		console.warn('Clerk billing webhook: failed to grant enrollment', { userId, courseSlug });
	}
}

export async function handleBillingWebhookEvent(type: string, data: unknown): Promise<void> {
	if (type === 'subscription.created' || type === 'subscription.active' || type === 'subscription.updated') {
		const payload = data as SubscriptionEventData;
		const userId = getUserId(payload.payer);
		if (!userId) {
			console.warn('Clerk billing webhook: subscription event missing payer.user_id', { type });
			return;
		}

		for (const item of payload.items ?? []) {
			await grantAccessForItem(userId, item, payload.id);
		}
		return;
	}

	if (type === 'subscriptionItem.active' || type === 'subscriptionItem.updated') {
		const payload = data as SubscriptionItemEventData;
		const userId = getUserId(payload.payer);
		if (!userId) {
			console.warn('Clerk billing webhook: subscription item event missing payer.user_id', { type });
			return;
		}

		const subscriptionId = payload.id ? `item_${payload.id}` : 'item_unknown';
		await grantAccessForItem(userId, payload, subscriptionId);
		return;
	}

	if (type === 'paymentAttempt.created' || type === 'paymentAttempt.updated') {
		const payload = data as PaymentAttemptEventData;
		if (payload.status !== 'paid') return;

		const userId = getUserId(payload.payer);
		if (!userId) {
			console.warn('Clerk billing webhook: payment attempt missing payer.user_id', { type });
			return;
		}

		const subscriptionId = payload.id ? `payment_${payload.id}` : 'payment_unknown';
		for (const item of payload.subscription_items ?? []) {
			await grantAccessForItem(userId, item, subscriptionId);
		}
	}
}
