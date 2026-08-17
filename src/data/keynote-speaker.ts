import type { Testimonial } from '@/data/testimonials';

export const speakingHero = {
	title: 'Healthy Leaders Build Healthy Cultures.',
	intro:
		'Mark Gordon helps organizations strengthen leadership, build trust, improve communication, and create cultures where people thrive.',
	experience:
		'Through engaging keynotes, practical leadership insights, and powerful storytelling, Mark equips leaders with tools they can use immediately.',
	credibility: [
		'35+ Years Leadership Experience',
		'Speaker',
		'Leadership Facilitator',
		'Executive Coach',
		'Author of Relationship Matters',
	],
	primaryCta: 'Book Mark to Speak',
	secondaryCta: 'Schedule a Conversation',
} as const;

export const speakingWhyMark = {
	title: 'More Than Inspiration. Practical Transformation.',
	lead: 'The best keynote presentations do more than motivate people for a day. They change the conversations people have when they return to work.',
	body:
		'Mark Gordon combines more than 35 years of leadership experience with practical tools leaders can apply immediately. His presentations help audiences:',
	outcomes: [
		'Build healthier relationships',
		'Strengthen trust',
		'Improve communication',
		'Navigate conflict effectively',
		'Increase self-awareness',
		'Develop stronger leadership habits',
		'Create healthier organizational cultures',
	],
	close: 'People leave encouraged. But more importantly, they leave equipped.',
} as const;

export const speakingPhilosophy = {
	title: 'Leadership Gets Better When Relationships Get Better.',
	lead: 'Most leadership challenges are not strategy problems. They are people problems.',
	tensions: [
		'Communication breaks down.',
		'Trust erodes.',
		'Conflict remains unresolved.',
		'Leaders become overwhelmed.',
		'Teams become disconnected.',
	],
	body:
		'Mark helps audiences understand what is happening beneath the surface and provides practical tools for creating healthier relationships, stronger teams, and more effective leadership.',
	close:
		'His presentations are engaging, relatable, practical, and filled with immediately usable takeaways.',
} as const;

export type SignatureKeynote = {
	title: string;
	overview: string;
	takeaways: string[];
};

export const signatureKeynotes: SignatureKeynote[] = [
	{
		title: 'Healthy Leadership Starts With Healthy Relationships',
		overview:
			'Leadership is ultimately relational. Whether you\'re leading a business, nonprofit, church, or team, your effectiveness is directly connected to your ability to build trust, communicate clearly, and create healthy relationships. This keynote explores the foundational principles that create healthy leaders and healthy cultures.',
		takeaways: [
			'How trust impacts leadership effectiveness',
			'Practical communication principles',
			'Common relationship traps leaders face',
			'Building healthier teams and cultures',
		],
	},
	{
		title: 'The Leadership Blind Spot',
		overview:
			'Every leader has blind spots. The problem is not having them. The problem is leading as though they don\'t exist. This keynote helps leaders identify hidden patterns that influence decisions, communication, relationships, and organizational culture.',
		takeaways: [
			'Increased self-awareness',
			'Understanding leadership blind spots',
			'Recognizing hidden leadership barriers',
			'Tools for growth and accountability',
		],
	},
	{
		title: 'Living From Identity',
		overview:
			'Many leaders spend their lives performing for approval rather than leading from confidence. This keynote explores how identity influences leadership, confidence, communication, relationships, and resilience.',
		takeaways: [
			'Greater self-awareness',
			'Increased confidence',
			'Freedom from unhealthy performance pressures',
			'Healthier leadership habits',
		],
	},
	{
		title: 'Relationship Matters',
		overview:
			'Healthy relationships do not happen by accident. They are built intentionally. Drawing from the principles in his book, Mark shares practical tools that strengthen relationships in leadership, teams, workplaces, and families.',
		takeaways: [
			'Trust-building principles',
			'Communication strategies',
			'Conflict navigation tools',
			'Practical relationship skills',
		],
	},
];

export const additionalSpeakingTopics = [
	'Understanding Anger',
	'Strength-Based Leadership',
	'Navigating Difficult Conversations',
	'Leading Through Change',
	'Building Trust',
	'Emotional Intelligence for Leaders',
	'Healthy Culture Development',
] as const;

export const workshopsTeaser = {
	title: 'Looking For More Than A Keynote?',
	intro:
		'Many organizations choose to extend the learning through workshops and leadership development experiences. These sessions provide opportunities for deeper discussion, practical application, team interaction, and skill development.',
	topicsLabel: 'Popular workshop topics include:',
	topics: [
		'Relationship Matters',
		'Living From Identity',
		'Understanding Anger',
		'Strength-Based Leadership',
		'Leadership Blind Spots',
		'Communication & Trust',
	],
	cta: 'Explore Workshops',
	href: '/workshop-facilitator/',
} as const;

export const speakingAudiences = {
	title: 'Audiences Mark Serves',
	audiences: [
		{
			title: 'Businesses',
			description:
				'Helping leaders create healthier workplace cultures and stronger teams.',
		},
		{
			title: 'Nonprofits',
			description:
				'Helping mission-driven organizations lead effectively while maintaining healthy relationships.',
		},
		{
			title: 'Faith Communities',
			description:
				'Helping leaders strengthen teams, navigate challenges, and lead with authenticity and purpose.',
		},
		{
			title: 'Leadership Teams',
			description:
				'Helping leaders improve communication, trust, accountability, and culture.',
		},
	],
} as const;

export const speakingTestimonialExcerpts: Testimonial[] = [
	{
		quote:
			'Mark has the ability to take difficult topics and issues people face and bring sensibility and solutions that can be acted on immediately.',
		author: 'Ron Schlitt',
		role: 'Lead Strengths Facilitator',
	},
	{
		quote:
			'He consistently receives the highest ratings in evaluations and feedback from participants.',
		author: 'Ron Schlitt',
		role: 'Lead Strengths Facilitator',
	},
	{
		quote:
			'Mark has the ability to communicate truth with passion and compassion.',
		author: 'Wes Jonat',
		role: 'Owner, Sun Valley Pools & Spas',
	},
	{
		quote: 'Funny, practical, engaging, and immediately applicable.',
		author: 'Gary Chupik',
		role: 'Owner, Gary Chupik Leadership LLC',
	},
];

export type FaqItem = {
	question: string;
	answer: string;
};

export const eventOrganizerFaq: FaqItem[] = [
	{
		question: 'Who is Mark best suited for?',
		answer:
			'Organizations, conferences, leadership teams, nonprofits, churches, and businesses seeking stronger leadership and healthier cultures.',
	},
	{
		question: 'Can Mark customize his presentation?',
		answer:
			'Yes. Every presentation can be tailored to the audience, event theme, and organizational needs.',
	},
	{
		question: 'Does Mark provide workshops as well?',
		answer:
			'Yes. Keynotes, workshops, leadership development, and coaching are available.',
	},
	{
		question: 'Is Mark available for virtual events?',
		answer: 'Yes.',
	},
	{
		question: 'How do we inquire about availability?',
		answer: 'Complete the contact form or schedule a conversation.',
	},
];

export const speakingBookingClose = {
	title: "Let's Create An Experience Your Audience Will Remember.",
	body:
		"Whether you're planning a conference, leadership retreat, staff development event, nonprofit gathering, or church leadership event, Mark would love to explore how he can serve your audience.",
	close: "Let's start with a conversation.",
	primaryCta: 'Book Mark to Speak',
	secondaryCta: 'Schedule a Conversation',
} as const;

export const speakingSeo = {
	title: 'Leadership & Culture Keynote Speaker | Mark Gordon',
	description:
		'Mark Gordon speaks on leadership, relationships, trust, and culture — practical keynotes for conferences, organizations, leadership teams, nonprofits, and faith communities.',
} as const;
