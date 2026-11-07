import type { APIRoute } from 'astro';
import { parseContactSubmission, sendContactEmail } from '@/lib/contact';

export const prerender = false;

function json(body: unknown, status: number) {
	return new Response(JSON.stringify(body), {
		status,
		headers: { 'Content-Type': 'application/json' },
	});
}

function page(title: string, body: string, status: number) {
	return new Response(
		`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><body style="font-family:sans-serif;max-width:36rem;margin:3rem auto;padding:0 1.5rem;line-height:1.5"><h1 style="font-size:1.4rem">${title}</h1>${body}<p><a href="/contact/">Back to contact</a></p></body></html>`,
		{ status, headers: { 'Content-Type': 'text/html; charset=utf-8' } },
	);
}

function thanksPage() {
	return page('Message sent', '<p>Thanks. Mark will be in touch shortly.</p>', 200);
}

function problemPage(message: string, status: number) {
	return page(
		'Message not sent',
		`<p>${message}</p><p><a href="mailto:mark@markgordon.ca">mark@markgordon.ca</a></p>`,
		status,
	);
}

async function readBody(request: Request): Promise<unknown> {
	const type = request.headers.get('content-type') ?? '';
	if (type.includes('application/json')) return request.json();
	const form = await request.formData();
	return Object.fromEntries(form.entries());
}

export const POST: APIRoute = async ({ request }) => {
	const wantsHtml = !(request.headers.get('content-type') ?? '').includes('application/json');

	let payload: unknown;
	try {
		payload = await readBody(request);
	} catch {
		return json({ error: 'Invalid request.' }, 400);
	}

	const parsed = parseContactSubmission(payload);
	if (parsed.status === 'spam') {
		return wantsHtml ? thanksPage() : json({ ok: true }, 200);
	}
	if (parsed.status === 'invalid') {
		return wantsHtml ? problemPage(parsed.error, 400) : json({ error: parsed.error }, 400);
	}

	try {
		const result = await sendContactEmail(parsed.value);
		if (result === 'unconfigured') {
			const error = 'Email is not configured yet. Please email mark@markgordon.ca.';
			return wantsHtml ? problemPage(error, 503) : json({ error }, 503);
		}
	} catch {
		const error = 'Unable to send your message right now. Please email mark@markgordon.ca.';
		return wantsHtml ? problemPage(error, 502) : json({ error }, 502);
	}

	return wantsHtml ? thanksPage() : json({ ok: true }, 200);
};
