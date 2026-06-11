import type { TransitionDirectionalAnimations } from 'astro:transitions';

const easeOut = 'cubic-bezier(0.22, 1, 0.36, 1)';
const easeIn = 'cubic-bezier(0.4, 0, 1, 1)';

/** Subtle fade + lift for main content swaps. Keeps the serious tone without feeling static. */
export const pageTransition: TransitionDirectionalAnimations = {
	forwards: {
		old: [{ name: 'page-exit', duration: '0.16s', easing: easeIn }],
		new: [{ name: 'page-enter', duration: '0.26s', easing: easeOut }],
	},
	backwards: {
		old: [{ name: 'page-exit', duration: '0.16s', easing: easeIn }],
		new: [{ name: 'page-enter', duration: '0.26s', easing: easeOut }],
	},
};
