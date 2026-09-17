import type { ImageMetadata } from 'astro';

import collageImg1 from '@/assets/content/faith-community-packages/tsg-8.jpg';
import collageImg2 from '@/assets/content/faith-community-packages/image-from-rawpixel-id-107968-original-1024x1024.jpg';
import collageImg3 from '@/assets/content/faith-community-packages/FG6A9662-scaled-e1610423538726-1024x806.jpg';
import collageImg4 from '@/assets/content/faith-community-packages/Mark-32-1-1024x1024.jpg';

export const faithCommunitySeo = {
	title: 'Faith Community Packages | Mark Gordon',
	description:
		'Relational culture packages for churches and faith communities—ongoing training, Relationship Matters, and leadership support for congregations, teams, and pastors.',
} as const;

export const faithCommunityHero = {
	eyebrow: 'Faith communities',
	title: 'Healthy Churches Are Built by Healthy Leaders.',
	subhead:
		'After more than 35 years in pastoral leadership, Mark helps churches strengthen the relationships that shape culture: the congregation, the leadership team, and the pastor.',
	areasIntro:
		'These packages are for churches that want more than a one-Sunday spark. They serve three areas at the same time:',
	primaryCta: 'Talk With Mark',
	secondaryCta: 'Explore the Packages',
	packagesAnchor: '#faith-packages',
} as const;

export const faithCommunityBookingClose = {
	title: "Let's Talk About Your Faith Community.",
	body:
		'Whether you want in-person training, an online model, or small-group facilitator support, start with a conversation about what your church actually needs.',
	primaryCta: 'Talk With Mark',
	secondaryCta: 'Start a Conversation',
} as const;

export type CollageImage = {
	image: ImageMetadata;
	size: 'small' | 'large';
	align?: 'left' | 'right';
};

export const faithCommunityCollage: CollageImage[][] = [
	[
		{ image: collageImg1, size: 'small', align: 'right' },
		{ image: collageImg2, size: 'large' },
	],
	[
		{ image: collageImg3, size: 'large' },
		{ image: collageImg4, size: 'small', align: 'left' },
	],
];

export const faithCommunityIntro = {
	audienceAreas: [
		'Congregation and family relationships',
		'Leadership-team relationships',
		'Pastoral relationships',
	],
	paragraphs: [
		'Plans combine training, tools, and ongoing support so the work continues after the event.',
	],
	closing:
		'Mark works across all three at once, so the church is not asking families, staff, and the pastor to grow in isolation.',
};

export type FaithPackage = {
	title: string;
	description: string;
	includes: string[];
	ctaLabel: string;
	footnotes?: string[];
	variant: 'brand' | 'muted';
};

export const faithPackages: FaithPackage[] = [
	{
		title: 'Relational Culture Transformation Package',
		description:
			'A one-time keynote can open a conversation. Lasting culture change takes training, coaching, and tools people keep using. This in-person package gives your church that ongoing rhythm.',
		includes: [
			'In-person Relationship Matters course with Q&A, workbooks, and book signing',
			'52 weekly relationship reminders for church bulletins',
			'Signed copy of Relationship Matters for the church leader',
			'Quarterly one-hour leadership training via Zoom',
			'Sunday sermon included',
		],
		ctaLabel: 'Talk With Mark',
		footnotes: ['*Payment plan available upon request', '*Travel expenses not included'],
		variant: 'brand',
	},
	{
		title: 'Online Relational Culture Transformation Package',
		description:
			'Same ongoing model, delivered where your people already are. A live webinar format so churches can train without bringing everyone to one room.',
		includes: [
			'Live webinar Relationship Matters course with Q&A and workbooks',
			'52 weekly relationship reminders for church bulletins',
			'Signed copy of Relationship Matters for the church leader',
			'Quarterly one-hour leadership training via Zoom',
		],
		ctaLabel: 'Talk With Mark',
		footnotes: ['*Payment plan available upon request'],
		variant: 'muted',
	},
];

export const smallGroupPackage = {
	title: 'Small Group Facilitator Training',
	paragraphs: [
		'Use Relationship Matters as your next small-group series—and train facilitators so they can lead it with confidence.',
		'Each video runs 20–30 minutes. The group watches together, talks, and works through the workbook. Facilitators get a two-hour training session plus email Q&A.',
	],
	includes: [
		'Two-hour small group facilitator training for the Relationship Matters course',
		'Q&A access via email',
		'Five access passes to the online Relationship Matters course',
		'Additional passes available for $50 each ($29 off)',
	],
	ctaLabel: 'Talk With Mark',
};

export const faithCommunityTestimonials = [
	{
		quote:
			"I highly recommend and endorse the teachings and the books by Mark. You too can be empowered for greatness by applying the principles of Mark's teachings. Experience TRUE LIFE CHANGE",
		author: 'Pastor Rory Franks',
	},
	{
		quote:
			"I just wanted to say we have been having fun with this Relationship Matters course. It's been insightful, helpful and the best part has been getting to know each other better as a team. Looking forward to our next session!",
		author: 'Daniel Kersey, The House of Shiloh',
	},
];
