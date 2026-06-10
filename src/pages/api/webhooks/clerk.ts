import { verifyWebhook } from '@clerk/astro/webhooks';
import type { APIRoute } from 'astro';
import { handleBillingWebhookEvent } from '@/lib/billing-webhook';
import { isDbConfigured } from '@/lib/db';

const BILLING_EVENTS = new Set([
	'subscription.created',
	'subscription.updated',
	'subscription.active',
	'subscriptionItem.active',
	'subscriptionItem.updated',
]);

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	const signingSecret = import.meta.env.CLERK_WEBHOOK_SIGNING_SECRET;
	if (!signingSecret) {
		return new Response('Webhook signing secret not configured', { status: 500 });
	}

	let event;
	try {
		event = await verifyWebhook(request, { signingSecret });
	} catch (error) {
		console.error('Clerk webhook verification failed:', error);
		return new Response('Verification failed', { status: 400 });
	}

	try {
		if (BILLING_EVENTS.has(event.type) && isDbConfigured()) {
			await handleBillingWebhookEvent(event.type, event.data);
		}
	} catch (error) {
		console.error(`Clerk webhook handler failed for ${event.type}:`, error);
		return new Response('Handler failed', { status: 500 });
	}

	return new Response('OK', { status: 200 });
};
