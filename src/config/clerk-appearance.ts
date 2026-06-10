import type { Appearance } from '@clerk/types';

export const clerkAppearance: Appearance = {
	variables: {
		colorPrimary: '#0047AB',
		colorText: '#4a4a4a',
		colorTextSecondary: '#617175',
		colorBackground: '#ffffff',
		fontFamily: '"Open Sans", ui-sans-serif, system-ui, sans-serif',
		fontFamilyButtons: '"Montserrat", ui-sans-serif, system-ui, sans-serif',
		borderRadius: '0.125rem',
	},
	elements: {
		formButtonPrimary:
			'rounded bg-[#0047AB] font-display text-sm font-medium uppercase tracking-wide hover:bg-[#003580]',
		card: 'rounded-sm shadow-sm',
		headerTitle: 'font-display uppercase tracking-wide',
		headerSubtitle: 'text-sm',
	},
};
