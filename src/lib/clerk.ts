import { createClerkClient, type ClerkClient } from '@clerk/backend';

let clerk: ClerkClient | undefined;

export function getClerkClient(): ClerkClient {
	if (!clerk) {
		const secretKey = import.meta.env.CLERK_SECRET_KEY;
		if (!secretKey) {
			throw new Error('CLERK_SECRET_KEY is not configured');
		}
		clerk = createClerkClient({ secretKey });
	}
	return clerk;
}

export function isClerkConfigured(): boolean {
	return Boolean(import.meta.env.CLERK_SECRET_KEY);
}
