import type { Testimonial } from '@/data/testimonials';

export const speakingHero = {
	title: 'Healthy Leaders Build Healthy Cultures.',
	subhead: {
		lead: 'Leadership challenges are rarely just strategy problems.',
		emphasis: "They're people problems.",
		tensions: [
			'Communication breaks down.',
			'Trust gets damaged.',
			'Conflict goes unresolved.',
			'Leaders become overwhelmed.',
		],
		close:
			'Mark Gordon helps organizations address what is happening beneath the surface so leaders, teams, and cultures can thrive.',
	},
	credibility: [
		'35+ Years of Leadership Experience',
		'Speaker',
		'Leadership Facilitator',
		'Executive Coach',
		'Author',
	],
	primaryCta: 'Book Mark to Speak',
	secondaryCta: 'Start a Conversation',
} as const;

export const speakingWhyMark = {
	title: 'More Than Inspiration. Practical Transformation.',
	paragraphs: [
		"The best keynote presentations don't end when the audience leaves the room.",
		'They continue in conversations, decisions, relationships, and leadership practices long after the event is over.',
		'Mark combines practical leadership insight, engaging storytelling, humor, and real-life experience to help audiences think differently about leadership, relationships, communication, trust, identity, and culture.',
		'Participants leave with more than inspiration.',
		'They leave with practical tools they can begin using immediately.',
	],
} as const;

export const speakingAudiences = {
	title: 'Audiences Mark Serves',
	audiences: [
		{
			title: 'Organizations & Businesses',
			description:
				'Helping leaders strengthen communication, trust, culture, and team effectiveness.',
		},
		{
			title: 'Non-Profit Organizations',
			description:
				'Equipping leaders to navigate people challenges while staying focused on mission.',
		},
		{
			title: 'Leadership Teams',
			description:
				'Providing practical tools that strengthen relationships and improve leadership effectiveness.',
		},
		{
			title: 'Conferences & Leadership Events',
			description:
				'Delivering engaging keynote presentations that challenge, inspire, and equip audiences.',
		},
		{
			title: 'Churches & Faith Communities',
			description:
				'Helping leaders develop healthier cultures, stronger relationships, and more effective leadership practices.',
		},
	],
} as const;

export type SignatureKeynote = {
	title: string;
	overview: string;
	takeaways: string[];
};

export const signatureKeynotesSection = {
	title: 'Conversations That Change the Way Leaders Lead',
} as const;

export const signatureKeynotes: SignatureKeynote[] = [
	{
		title: 'Healthy Leadership Starts With Healthy Relationships',
		overview:
			'Most leadership challenges are people challenges. Trust, communication, authenticity, honesty, and honour shape every team and every culture. This keynote helps leaders understand how healthy relationships create healthy organizations.',
		takeaways: [
			'How relationships shape culture',
			'Why trust is a leadership issue',
			'Practical ways to strengthen communication',
			'How healthy relationships improve performance',
		],
	},
	{
		title: 'The Leadership Blind Spot',
		overview:
			"Every leader has blind spots. The question isn't whether they exist. The question is whether they're limiting effectiveness, damaging relationships, or undermining culture. This keynote helps leaders identify hidden patterns and develop greater self-awareness.",
		takeaways: [
			'How blind spots develop',
			'Why self-awareness matters',
			'Common leadership blind spots',
			'Practical strategies for growth',
		],
	},
	{
		title: 'Living From Identity',
		overview:
			'The healthiest leaders know who they are. Confidence, clarity, and influence begin internally before they appear externally. This presentation helps leaders understand how identity impacts leadership effectiveness, decision-making, and relationships.',
		takeaways: [
			'How identity shapes leadership',
			'Why insecurity affects teams',
			'How confidence differs from arrogance',
			'Practical tools for healthier leadership',
		],
	},
	{
		title: 'Relationship Matters',
		overview:
			"Healthy relationships don't happen accidentally. They are built intentionally. Based on Mark's book Relationship Matters, this keynote provides practical principles that strengthen communication, trust, and connection.",
		takeaways: [
			'The five pillars of healthy relationships',
			'How communication shapes outcomes',
			'Why authenticity builds trust',
			'Practical relationship tools for everyday life',
		],
	},
];

export const additionalSpeakingTopics = [
	'Strength-Based Leadership',
	'Understanding Anger',
	'Building Trust',
	'Difficult Conversations',
	'Leading Through Change',
	'Navigating Crisis Decisions',
	'Creating Healthy Organizational Cultures',
] as const;

export const whatMakesMarkDifferent = {
	title: 'Experience You Can Hear.',
	lead: 'Many speakers teach leadership.',
	emphasis: 'Mark has spent more than three decades living it.',
	credentials: [
		'More than 35 years leading people',
		'Extensive experience developing leaders',
		'Coaching executives, pastors, business owners, and nonprofit leaders',
		'Speaking to diverse audiences',
		'Authoring Relationship Matters',
		'Creating leadership development programs used by organizations and leaders across multiple sectors',
	],
	close:
		"Mark's presentations are grounded in real-world leadership experience—not simply theory.",
	testimonial:
		'His audiences consistently describe him as practical, authentic, engaging, and immediately applicable.',
} as const;

export const speakingTestimonialExcerpts: Testimonial[] = [
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
	{
		quote: 'Mark communicates truth with both passion and compassion.',
		author: 'Wes Jonat',
		role: 'Owner, Sun Valley Pools & Spas',
	},
];

export const followUpOpportunities = {
	title: 'Looking For More Than A One-Day Event?',
	intro:
		'Many organizations invite Mark to speak and then choose to continue the conversation through leadership development, workshops, assessments, or executive coaching.',
	opportunities: [
		{
			title: 'Leadership Accelerator',
			description:
				'A cohort-based leadership development experience designed to create lasting growth.',
			href: '/leadership-accelerator/',
		},
		{
			title: 'Workshops',
			description:
				'Interactive sessions that take key leadership concepts deeper.',
			href: '/workshop-facilitator/',
		},
		{
			title: 'Blind Spot Assessment',
			description:
				'A practical assessment tool that helps leaders identify areas for growth.',
			href: '/blind-spot-assessment/',
		},
		{
			title: 'Executive Coaching',
			description:
				'Personalized coaching for leaders seeking greater clarity, effectiveness, and impact.',
			href: '/relationship-leadership-coaching/',
		},
	],
} as const;

export type FaqItem = {
	question: string;
	answer: string;
};

export const eventOrganizerFaq: FaqItem[] = [
	{
		question: "How long are Mark's presentations?",
		answer:
			'Keynotes can be customized for conference sessions, leadership retreats, staff events, and leadership gatherings.',
	},
	{
		question: 'Can Mark customize content?',
		answer:
			'Yes. Every audience is unique. Mark works with event organizers to ensure presentations address the needs of the audience.',
	},
	{
		question: 'Does Mark speak to both faith-based and non-faith-based audiences?',
		answer:
			'Yes. Mark regularly serves churches, nonprofits, businesses, and leadership organizations. Content can be adapted appropriately for the audience.',
	},
	{
		question: 'Does Mark provide workshops in addition to keynote presentations?',
		answer:
			'Absolutely. Many organizations choose to pair a keynote presentation with a workshop or leadership development experience.',
	},
];

export const speakingBookingClose = {
	title: "Let's Create An Event That Makes A Difference.",
	body:
		"Whether you're planning a conference, leadership retreat, staff event, nonprofit gathering, or leadership development experience, Mark brings practical insight, engaging communication, and actionable tools that audiences can immediately apply.",
	primaryCta: 'Book Mark to Speak',
	secondaryCta: 'Schedule a Conversation',
} as const;

export const speakingSeo = {
	title: 'Leadership & Culture Keynote Speaker | Mark Gordon',
	description:
		'Book Mark Gordon to speak at your conference, retreat, or leadership event. Practical keynotes on leadership, relationships, trust, and culture for organizations, nonprofits, and faith communities.',
} as const;

/** @deprecated Use followUpOpportunities */
export const workshopsTeaser = followUpOpportunities;

/** @deprecated Removed from page — content moved to hero subhead */
export const speakingPhilosophy = {
	title: '',
	lead: '',
	tensions: [],
	body: '',
	close: '',
} as const;
