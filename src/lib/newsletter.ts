const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type NewsletterParse =
	| { status: 'ok'; email: string }
	| { status: 'spam' }
	| { status: 'invalid'; error: string };

export function parseNewsletterSubmission(input: unknown): NewsletterParse {
	if (!input || typeof input !== 'object') {
		return { status: 'invalid', error: 'Invalid request.' };
	}

	const body = input as Record<string, unknown>;
	if (typeof body.fax === 'string' && body.fax.trim()) {
		return { status: 'spam' };
	}

	const email = typeof body.email === 'string' ? body.email.trim().slice(0, 254) : '';
	if (!EMAIL.test(email)) {
		return { status: 'invalid', error: 'Please add a valid email address.' };
	}

	return { status: 'ok', email };
}

export async function saveNewsletterContact(email: string): Promise<'saved' | 'unconfigured'> {
	const apiKey = import.meta.env.RESEND_API_KEY;
	if (!apiKey) return 'unconfigured';

	const segmentId = import.meta.env.RESEND_SEGMENT_ID;
	const payload: { email: string; unsubscribed: false; segments?: { id: string }[] } = {
		email,
		unsubscribed: false,
	};
	if (segmentId) payload.segments = [{ id: segmentId }];

	const response = await fetch('https://api.resend.com/contacts', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${apiKey}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(payload),
	});

	if (response.ok) return 'saved';

	const detail = await response.text();
	if (response.status === 409 || /already exists/i.test(detail)) return 'saved';

	console.error('Resend newsletter signup failed', response.status, detail);
	throw new Error('Unable to save contact');
}
