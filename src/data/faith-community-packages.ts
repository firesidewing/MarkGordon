import type { ImageMetadata } from 'astro';

import collageImg1 from '@/assets/content/faith-community-packages/tsg-8.jpg';
import collageImg2 from '@/assets/content/faith-community-packages/image-from-rawpixel-id-107968-original-1024x1024.jpg';
import collageImg3 from '@/assets/content/faith-community-packages/FG6A9662-scaled-e1610423538726-1024x806.jpg';
import collageImg4 from '@/assets/content/faith-community-packages/Mark-32-1-1024x1024.jpg';

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
		"The congregation's family and personal relationships",
		'The Leadership teams relationships',
		'The Pastors relationships',
	],
	paragraphs: [
		'Over the past 30 years I have developed principal-based systems and practical blueprints that foster healthy relationships, solving the relationship gap we have today.',
		"Church families flourish most when there is a healthy relational culture and so I offer a variety of plans for faith communities that serves all three area's of church relationships.",
	],
	closing:
		'I work with all three at the same time helping you develop a healthy relational culture and flourishing church',
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
			'The goal of this model is to provide ongoing tools and empowerment for people to build healthy relationships at home, church and work. I have found over the years that one-time keynotes, workshops or conference events have the ability to inspire and provide insights; however to experience real lasting transformation it takes ongoing training, coaching and purpose-built tools.',
		includes: [
			'In-person Relationship Matters course with Q.A., workbooks, and book signing',
			'52 Weekly relationship reminders for Church Bulletins',
			'Signed copy of the Relationship Matters book for the church leader',
			'Leadership Training (via Zoom) for the church leadership team - Quarterly 1 hr meeting',
			'Sunday Sermon included',
		],
		ctaLabel: 'Get Started Now!',
		footnotes: ['*Payment Plan available upon request', '*Not including travel expenses'],
		variant: 'brand',
	},
	{
		title: 'Online Relational Culture Transformation Package',
		description:
			'The goal of this model is to provide ongoing tools and empowerment for people to build healthy relationships at home, church and work. An online model provides the ability to get the course taught from where ever your faith community is located.',
		includes: [
			'Live Webinar Relationship Matters course with Q.A., and workbooks',
			'52 Weekly relationship reminders for Church Bulletins',
			'Signed copy of the Relationship Matters book for the church leader',
			'Leadership Training (via Zoom) for the church leadership team - Quarterly 1 hr meeting',
		],
		ctaLabel: 'Get Started',
		footnotes: ['*Payment Plan available upon request'],
		variant: 'muted',
	},
];

export const smallGroupPackage = {
	title: 'Small Group Facilitator Training for Healthy Relationship Course',
	paragraphs: [
		'Looking for your next small group subject? Get the most impact for your congregation with the Relationship Matters video course by ensuring your small group facilitators are able to lead the course with confidence.',
		'This is designed to be a great interactive small group training, each video is between 20-30 minutes that facilitator plays for the small group and then they have discussion and work through the workbook together. It is a tremendous way to empower your congregations family and personal relationships.',
	],
	includes: [
		'Small group facilitator training for Relationship Matters course - 2hr session',
		'Includes Q.A access via email',
		'Includes five access passes to the Online Relationship Matters course',
		'Each additional pass is available for $50 each ($29 off!)',
	],
	ctaLabel: 'Get Started',
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
