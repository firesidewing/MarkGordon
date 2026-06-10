import { createClient, type Client } from '@libsql/client';

let client: Client | undefined;

export function getDb(): Client {
	if (!client) {
		const url = import.meta.env.TURSO_DATABASE_URL;
		const authToken = import.meta.env.TURSO_AUTH_TOKEN;

		if (!url) {
			throw new Error('TURSO_DATABASE_URL is not configured');
		}

		client = createClient({ url, authToken });
	}

	return client;
}

export function isDbConfigured(): boolean {
	return Boolean(import.meta.env.TURSO_DATABASE_URL);
}
