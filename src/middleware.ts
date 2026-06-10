import { clerkMiddleware, createRouteMatcher } from '@clerk/astro/server';

const isProtectedRoute = createRouteMatcher(['/account(.*)']);

const isPublicRoute = createRouteMatcher([
	'/api/webhooks(.*)',
	'/sign-in',
	'/sign-in/',
	'/sign-up',
	'/sign-up/',
]);

export const onRequest = clerkMiddleware((auth, context, next) => {
	if (isPublicRoute(context.request)) {
		return next();
	}

	if (isProtectedRoute(context.request) && !auth().userId) {
		return auth().redirectToSignIn();
	}

	return next();
});
