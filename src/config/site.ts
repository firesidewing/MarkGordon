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
	tagline: 'Healthy leaders build healthy cultures — leadership speaking, workshops, and coaching.',
	footerTagline: 'Healthy leaders build healthy cultures.',
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

/** Speaking-first navigation — keep the top bar sparse; fuller links live in Resources + footer */
export const mainNav: NavItem[] = [
	{ label: 'Speaking', href: '/keynote-speaker/' },
	{ label: 'Workshops', href: '/workshop-facilitator/' },
	{ label: 'Coaching', href: '/relationship-leadership-coaching/' },
	{ label: 'About', href: '/about-mark/' },
	{
		label: 'Resources',
		href: '/online-courses/',
		children: [
			{ label: 'Leadership Accelerator', href: '/leadership-accelerator/' },
			{ label: 'Relationship Matters', href: '/relationship-matters/' },
			{ label: 'Online Courses', href: '/online-courses/' },
			{ label: 'Videos', href: '/vlogs/' },
			{ label: 'Blog', href: '/blog/' },
			{ label: 'Faith Community Packages', href: '/faith-community-packages/' },
			{ label: 'Testimonials', href: '/#testimonials' },
			{ label: 'Blind Spot Assessment', href: '/blind-spot-assessment/' },
		],
	},
	{ label: 'Contact', href: '/contact/' },
];

export const footerNavLinks = [
	{ label: 'Speaking', href: '/keynote-speaker/' },
	{ label: 'Workshops', href: '/workshop-facilitator/' },
	{ label: 'Coaching', href: '/relationship-leadership-coaching/' },
	{ label: 'Leadership Accelerator', href: '/leadership-accelerator/' },
	{ label: 'About Mark', href: '/about-mark/' },
	{ label: 'Testimonials', href: '/#testimonials' },
	{ label: 'Relationship Matters', href: '/relationship-matters/' },
	{ label: 'Resources', href: '/online-courses/' },
	{ label: 'Contact', href: '/contact/' },
] as const;

/** @deprecated Use footerNavLinks */
export const footerQuickLinks = footerNavLinks;
