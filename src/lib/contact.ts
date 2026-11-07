export type ContactMessage = {
	name: string;
	email: string;
	message: string;
};

export type ContactParse =
	| { status: 'ok'; value: ContactMessage }
	| { status: 'spam' }
	| { status: 'invalid'; error: string };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function text(value: unknown, max: number): string {
	if (typeof value !== 'string') return '';
	return value.replace(/\s+/g, ' ').trim().slice(0, max);
}

function messageText(value: unknown, max: number): string {
	if (typeof value !== 'string') return '';
	return value.replace(/\r\n/g, '\n').trim().slice(0, max);
}

export function parseContactSubmission(input: unknown): ContactParse {
	if (!input || typeof input !== 'object') {
		return { status: 'invalid', error: 'Invalid request.' };
	}

	const body = input as Record<string, unknown>;
	if (typeof body.fax === 'string' && body.fax.trim()) {
		return { status: 'spam' };
	}

	const name = text(body.name, 120);
	const email = text(body.email, 254);
	const message = messageText(body.message, 5000);

	if (!name) return { status: 'invalid', error: 'Please add your name.' };
	if (!EMAIL.test(email)) return { status: 'invalid', error: 'Please add a valid email address.' };
	if (message.length < 2) return { status: 'invalid', error: 'Please add a message.' };

	return { status: 'ok', value: { name, email, message } };
}

export async function sendContactEmail(message: ContactMessage): Promise<'sent' | 'unconfigured'> {
	const apiKey = import.meta.env.RESEND_API_KEY;
	if (!apiKey) return 'unconfigured';

	const to = import.meta.env.CONTACT_TO_EMAIL || 'mark@markgordon.ca';
	const from = import.meta.env.CONTACT_FROM_EMAIL || 'Mark Gordon Website <website@updates.markgordon.ca>';

	const response = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${apiKey}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			from,
			to: [to],
			reply_to: message.email,
			subject: `Website message from ${message.name}`,
			text: `Name: ${message.name}\nEmail: ${message.email}\n\n${message.message}\n`,
		}),
	});

	if (!response.ok) {
		console.error('Resend contact email failed', response.status, await response.text());
		throw new Error('Unable to send message');
	}

	return 'sent';
}
