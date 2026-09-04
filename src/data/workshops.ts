import type { Testimonial } from '@/data/testimonials';

export const workshopsSeo = {
	title: 'Leadership Workshops & Development | Mark Gordon',
	description:
		'Practical leadership workshops for teams and organizations. Signature sessions on relationships, blind spots, identity, and culture—designed to move leaders from insight to action.',
} as const;

export const workshopsHero = {
	eyebrow: 'Workshops',
	title: 'Leadership Development You Can Put Into Practice.',
	lead:
		"Great leadership isn't developed by listening to information. It's developed when people gain new understanding, practice new skills, and begin leading differently.",
	body: "Mark Gordon's workshops are designed to create that kind of movement—bringing practical leadership tools, relational insight, engaging conversation, and immediately applicable strategies to your team or organization.",
	primaryCta: 'Talk With Mark About Your Team',
	secondaryCta: 'Explore the Workshops',
} as const;

export const workshopsWhyMark = {
	title: 'More Than a Workshop. A Conversation That Can Change How You Lead.',
	paragraphs: [
		"The best leadership development doesn't simply give people more information.",
		'It helps them see something differently.',
		'It challenges assumptions.',
		'It gives them language for difficult conversations.',
		'And it provides practical tools they can take back to work, home, and leadership immediately.',
		"Mark's workshops combine experience, practical frameworks, storytelling, discussion, and application to help leaders move from insight to action.",
	],
} as const;

export type SignatureWorkshop = {
	title: string;
	subtitle?: string;
	overview: string[];
	participantsExplore: string[];
	bestFor: string;
	note?: string;
	link?: { label: string; href: string };
};

export const signatureWorkshopsSection = {
	title: 'Signature Leadership Workshops',
} as const;

export const signatureWorkshops: SignatureWorkshop[] = [
	{
		title: 'Healthy Leadership Starts With Healthy Relationships',
		overview: [
			'Leadership is always relational.',
			'Trust, communication, conflict, accountability, and culture all depend on the quality of the relationships around us.',
			'This workshop explores the foundations of healthy relationships and how they translate directly into healthy leadership and healthy organizational culture.',
		],
		participantsExplore: [
			'The foundations of trust',
			'Communication that creates connection',
			'Authenticity and emotional honesty',
			'Healthy conflict',
			'Honour and respect',
			'How relationships shape culture',
		],
		bestFor:
			'Leadership teams, organizations, conferences, nonprofits, and faith communities.',
	},
	{
		title: 'The Leadership Blind Spot',
		overview: [
			'Every leader has blind spots.',
			"The challenge isn't having them. The challenge is what happens when we don't recognize them.",
			'This workshop helps leaders develop greater self-awareness and understand how their patterns, assumptions, strengths, and behaviours may be affecting the people they lead.',
		],
		participantsExplore: [
			'What blind spots are and how they develop',
			'How strengths can become liabilities',
			'The impact of leadership under pressure',
			'How others may experience our leadership',
			'Self-awareness as a foundation for growth',
			'Practical strategies for becoming a more intentional leader',
		],
		note: "This workshop can also be paired with Mark's Blind Spot Assessment and individual or team debrief.",
		bestFor:
			'Leadership teams, emerging leaders, executives, and organizations experiencing growth or transition.',
	},
	{
		title: 'Living From Identity',
		overview: [
			'Lead from who you are—not from what you feel you have to prove.',
			"Many leadership struggles aren't really about ability. They're about identity.",
			'When leaders lead from insecurity, shame, fear, comparison, or the need for approval, those internal patterns can eventually show up in communication, decision-making, relationships, and culture.',
			'Living From Identity helps leaders understand the difference between leading from a secure sense of identity and leading from the need to prove themselves.',
		],
		participantsExplore: [
			'Identity and leadership',
			'Shame and the stories we carry',
			'Confidence without arrogance',
			'Emotional and relational awareness',
			'Breaking unhealthy patterns',
			'Leading from a healthier internal foundation',
		],
		bestFor:
			'Leadership development programs, faith communities, emerging leaders, and organizations investing in personal growth.',
	},
	{
		title: 'Relationship Matters',
		subtitle: 'Because Leadership Is Always Relational.',
		overview: [
			"Based on Mark's book and five-pillar framework, Relationship Matters provides a practical foundation for understanding what creates healthy relationships—and what causes them to break down.",
			'The five pillars are: Trust · Communication · Authenticity · Honesty · Honour',
			'Participants discover how these principles influence everything from leadership and teamwork to family and community.',
		],
		participantsExplore: [],
		bestFor:
			'Leadership teams, organizations, churches, nonprofits, couples, and groups.',
		link: { label: 'Explore Relationship Matters', href: '/relationship-matters/' },
	},
];

export type AdditionalWorkshopTopic = {
	title: string;
	description: string;
};

export const additionalWorkshopTopicsSection = {
	title: 'Additional Workshop Topics',
	intro:
		"Depending on your organization's needs, Mark can also develop workshops around specific leadership challenges, including:",
} as const;

export const additionalWorkshopTopics: AdditionalWorkshopTopic[] = [
	{
		title: 'Strength-Based Leadership',
		description:
			'Discover how identifying and developing strengths can help leaders build more confident, engaged, and effective teams.',
	},
	{
		title: 'Understanding Anger',
		description:
			'Explore what anger is communicating, how it affects relationships and decision-making, and how to respond more constructively.',
	},
	{
		title: 'Difficult Conversations',
		description:
			'Develop the courage and practical skills to address challenging issues without damaging relationships.',
	},
	{
		title: 'Building Trust',
		description:
			'Understand how trust is built, lost, and rebuilt—and why trust is foundational to healthy teams.',
	},
	{
		title: "Navigating Life's Decisions",
		description:
			'Practical tools for making wise decisions when circumstances are complicated, uncertain, or in crisis.',
	},
	{
		title: 'Creating Healthy Organizational Cultures',
		description:
			'Explore how leadership behaviours, relationships, communication, and shared expectations shape the culture people experience every day.',
	},
];

export const workshopsDeliverySection = {
	title: 'Designed Around Your People',
	subtitle: "One Size Doesn't Fit Every Organization.",
	intro:
		"Your team has its own culture, challenges, strengths, and opportunities. That's why Mark can adapt workshops to your context rather than simply delivering a pre-packaged presentation.",
	formats: [
		{
			title: '90-Minute Sessions',
			description: 'Focused, practical learning around a specific leadership challenge.',
		},
		{
			title: 'Half-Day Workshops',
			description: 'More time for teaching, discussion, reflection, and application.',
		},
		{
			title: 'Full-Day Leadership Experiences',
			description:
				'Deeper exploration, team conversation, exercises, and practical action planning.',
		},
		{
			title: 'Multi-Session Development',
			description: 'A workshop becomes part of an ongoing leadership-development journey.',
		},
	],
} as const;

export const workshopsFrameworkSection = {
	title: 'From Awareness to Application',
	intro:
		"A powerful workshop should leave people with more than notes. Mark's workshops are designed to move participants through a simple progression:",
	close:
		'Because leadership development matters most when it changes what happens after the workshop.',
	steps: [
		{ label: 'See It', description: 'Recognize the leadership challenge.' },
		{ label: 'Understand It', description: "Discover what's happening beneath the surface." },
		{ label: 'Practice It', description: 'Learn practical tools and new ways of responding.' },
		{ label: 'Apply It', description: 'Identify what needs to change in your own leadership.' },
		{ label: 'Live It', description: 'Take the learning back into everyday leadership.' },
	],
} as const;

export const workshopsEcosystemSection = {
	title: 'Workshops Can Be the Beginning.',
	intro:
		'Sometimes an organization needs a focused leadership workshop. Sometimes the workshop reveals a deeper opportunity.',
	body: 'Mark can help organizations build a broader leadership-development pathway through:',
	pathways: [
		{
			title: 'Speaking',
			description: 'Create awareness and inspire a new conversation.',
			href: '/keynote-speaker/',
		},
		{
			title: 'Workshops',
			description: 'Develop practical skills and shared language.',
			href: '/workshop-facilitator/',
		},
		{
			title: 'Blind Spot Assessment',
			description: 'Increase individual and team self-awareness.',
			href: '/blind-spot-assessment/',
		},
		{
			title: 'Executive Coaching',
			description: 'Create space for leaders to apply the learning personally.',
			href: '/relationship-leadership-coaching/',
		},
		{
			title: 'Leadership Accelerator',
			description: 'Develop leaders through a deeper, cohort-based experience.',
			href: '/leadership-accelerator/',
		},
	],
} as const;

export const workshopsOrganizationsSection = {
	title: 'For Organizations Ready to Invest in Their Leaders',
	body: "Whether you're planning a leadership retreat, developing your team, preparing emerging leaders, navigating change, or working to strengthen your organizational culture, Mark can help design an experience that fits your people and your goals.",
	cta: "Let's Talk About What Your Team Needs",
} as const;

export const workshopsTestimonialExcerpts: Testimonial[] = [
	{
		quote:
			'Mark has a unique ability to get to the heart of what is really going on and provide practical tools to move forward.',
		author: 'Ron Schlitt',
		role: 'Lead Strengths Facilitator',
	},
	{
		quote:
			"Mark's approach is practical, insightful and relational. He doesn't just teach leadership—he helps people become better leaders.",
		author: 'Wes Jonat',
		role: 'Owner, Sun Valley Pools & Spas',
	},
	{
		quote:
			'Mark has the ability to take the difficult topics and issues people face and bring sensibility and solutions that can be acted on immediately.',
		author: 'Ron Schlitt',
		role: 'Lead Strengths Facilitator',
	},
	{
		quote:
			'Mark is funny, engaging, practical, and communicates in a way that connects with people at every level.',
		author: 'Gary Chupik',
		role: 'Owner, Gary Chupik Leadership LLC',
	},
];

export const workshopsBookingClose = {
	title: "Let's Develop Your Leaders.",
	question:
		'What could change if your leaders had the tools, awareness, and confidence to lead differently?',
	primaryCta: 'Talk With Mark',
	secondaryCta: 'Book a Workshop',
} as const;
