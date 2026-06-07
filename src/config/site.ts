export type NavLink = {
	label: string;
	href: string;
	external?: boolean;
};

export type NavItem = NavLink & {
	children?: NavLink[];
};

export const site = {
	name: 'Mark Gordon',
	email: 'mark@markgordon.ca',
	tagline: 'Empowering people in developing healthy relationships.',
	copyright: `Copyright ${new Date().getFullYear()} - Mark Gordon`,
} as const;

export const hubspot = {
	discoveryCall: 'https://meetings.hubspot.com/rmarkgordon/15-min-discovery-meeting',
	newsletterForm: {
		portalId: '23748604',
		formId: '14655439-3f03-4321-85b3-fb64acdc4955',
		region: 'na1',
	},
} as const;

export const blindSpot = {
	riddleId: 'yMIVAotF',
	directUrl: 'https://blindspots.me/hcWAIr',
} as const;

export const socialLinks = [
	{ label: 'Facebook', href: 'https://www.facebook.com/mark.gordon.7545', icon: 'facebook' },
	{ label: 'Twitter', href: 'https://twitter.com/rMarkGordon?lang=en', icon: 'twitter' },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/rmarkgordon/', icon: 'linkedin' },
	{ label: 'Instagram', href: 'https://www.instagram.com/rmarkgordon/?hl=en', icon: 'instagram' },
	{ label: 'YouTube', href: 'https://www.youtube.com/@rmarkgordon', icon: 'youtube' },
] as const;

/** Main nav from export.xml → main_navi */
export const mainNav: NavItem[] = [
	{ label: 'Online Courses', href: '/online-courses/' },
	{ label: 'Videos', href: '/vlogs/' },
	{ label: 'Relationship Matters Book', href: '/relationship-matters/' },
	{
		label: 'What I Offer',
		href: '#',
		children: [
			{ label: 'Online Courses', href: '/online-courses/' },
			{ label: 'Faith Community Packages', href: '/faith-community-packages/' },
			{ label: 'The Blind Spot Assessment', href: 'https://blindspots.me/hcWAIr', external: true },
			{ label: 'Keynote Speaker', href: '/keynote-speaker/' },
			{ label: 'Workshop Facilitator', href: '/workshop-facilitator/' },
			{ label: 'Relationship & Leadership Coaching', href: '/relationship-leadership-coaching/' },
		],
	},
	{
		label: 'Contact',
		href: '/contact/',
		children: [
			{ label: 'About Mark', href: '/about-mark/' },
			{ label: 'Contact', href: '/contact/' },
		],
	},
];

export const footerQuickLinks = [
	{ label: 'KEYNOTE SPEAKER', href: '/keynote-speaker/' },
	{ label: 'WORKSHOPS', href: '/workshop-facilitator/' },
	{ label: 'COACHING', href: '/relationship-leadership-coaching/' },
	{ label: 'BUY THE BOOK', href: '/relationship-matters/' },
] as const;
