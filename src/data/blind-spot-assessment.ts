import { blindSpot } from '@/config/site';

export const blindSpotSeo = {
	title: 'Blind Spot Assessment | Mark Gordon',
	description:
		'Take the free Blind Spot Assessment to uncover leadership patterns that may be affecting your relationships, communication, and effectiveness.',
} as const;

export const blindSpotHero = {
	eyebrow: 'Blind Spot Assessment',
	title: 'Every Leader Has Blind Spots.',
	subhead: 'The question is whether yours are costing you.',
	paragraphs: [
		'Great leaders are not leaders without blind spots.',
		'They are leaders who are willing to discover them, understand them, and do something about them.',
		'The Blind Spot Assessment is a simple, practical way to uncover patterns that may be affecting your leadership, relationships, communication, and effectiveness—often in ways you don\u2019t see yourself.',
	],
	primaryCta: 'Take the Free Assessment',
	secondaryCta: 'Explore Your Results',
	assessmentUrl: blindSpot.directUrl,
} as const;

export const blindSpotSelfAwareness = {
	title: 'Leadership Self-Awareness Changes Everything',
	intro:
		'We all have areas of our leadership that are easier to see from the outside than from the inside.',
	youMayBeLabel: 'You may be:',
	scenarios: [
		'Communicating clearly—but not being heard.',
		'Working hard—but creating exhaustion around you.',
		'Avoiding conflict—while calling it keeping the peace.',
		'Taking responsibility for everything—while unintentionally preventing others from growing.',
		'Believing you are approachable—while others experience you as intimidating.',
		'Solving problems quickly—without realizing your team needs to be heard first.',
	],
	closing: [
		'These aren\u2019t necessarily character flaws.',
		'They\u2019re blind spots.',
		'And what we don\u2019t see can quietly shape the way we lead.',
	],
} as const;

export const blindSpotDefinition = {
	title: 'What Is a Blind Spot?',
	definition:
		'A blind spot is an area of our leadership, behaviour, or relationships that is difficult for us to recognize in ourselves—but may be obvious to the people around us.',
	developLabel: 'Blind spots often develop because of:',
	factors: [
		{
			title: 'Our experiences',
			description: 'What we\u2019ve learned about ourselves, others, and leadership.',
		},
		{
			title: 'Our strengths',
			description: 'Even healthy strengths can become liabilities when overused.',
		},
		{
			title: 'Our assumptions',
			description: 'The beliefs we carry about how leadership \u201cshould\u201d work.',
		},
		{
			title: 'Our patterns',
			description: 'Behaviours that have become so familiar that we no longer question them.',
		},
		{
			title: 'Our fears',
			description: 'The things we avoid, control, protect, or prove.',
		},
	],
	goal: 'The goal isn\u2019t to discover what\u2019s \u201cwrong\u201d with you. The goal is to discover what may be getting in the way of the leader you want to become.',
	cta: 'Take the Free Assessment',
} as const;

export type BlindSpotExploreArea = {
	title: string;
	question: string;
};

export const blindSpotExplore = {
	title: 'Discover What You May Not Be Seeing',
	intro:
		'The Blind Spot Assessment gives you an opportunity to pause and look at your leadership from a different perspective. In just a few minutes, you can begin identifying areas that may deserve greater attention.',
	areasLabel: 'The Assessment Can Help You Explore:',
	areas: [
		{
			title: 'Self-Awareness',
			question: 'How well do you understand the impact you\u2019re having on others?',
		},
		{
			title: 'Communication',
			question: 'How might your communication style be helping—or hindering—your team?',
		},
		{
			title: 'Relationships',
			question: 'Are the relationships around you characterized by trust, openness, and connection?',
		},
		{
			title: 'Leadership Patterns',
			question: 'What behaviours tend to emerge when you\u2019re under pressure?',
		},
		{
			title: 'Emotional Awareness',
			question:
				'How effectively do you recognize and respond to your own emotions and those of others?',
		},
		{
			title: 'Impact',
			question:
				'Is the way you intend to lead the way others actually experience your leadership?',
		},
	] satisfies BlindSpotExploreArea[],
} as const;

export const blindSpotJourney = {
	title: 'Awareness Is Only the Beginning',
	paragraphs: [
		'An assessment can give you information.',
		'But information alone doesn\u2019t create change.',
		'That\u2019s why Mark\u2019s approach doesn\u2019t stop with the results.',
	],
	steps: ['Assessment', 'Insight', 'Conversation', 'Action', 'Growth'],
	stepsLabel: 'Assessment \u2192 Insight \u2192 Conversation \u2192 Action \u2192 Growth',
	closing: [
		'The assessment helps you see.',
		'The debrief helps you understand.',
		'Coaching and practical leadership development help you change.',
		'Because the goal isn\u2019t simply to know your blind spots.',
		'The goal is to lead differently because you know them.',
	],
} as const;

export const blindSpotDebrief = {
	title: 'Want to Go Deeper?',
	subtitle: 'Your Results Are Better When You Don\u2019t Explore Them Alone.',
	paragraphs: [
		'Once you\u2019ve completed the assessment, you have the option of scheduling a conversation with Mark to explore what your results may be telling you.',
		'This isn\u2019t about judgment.',
		'It\u2019s about curiosity.',
	],
	exploreLabel: 'Together, you can explore:',
	exploreItems: [
		'What stands out in your results',
		'What patterns you recognize',
		'What may be happening beneath the surface',
		'How your blind spots may be affecting your relationships and leadership',
		'What practical steps could help you move forward',
	],
	cta: 'Book a Blind Spot Debrief',
	closing: 'Let\u2019s talk about what you\u2019re seeing—and what you might not be seeing yet.',
} as const;

export const blindSpotMidCta = {
	title: 'Blind Spots Don\u2019t Have to Stay Blind.',
	paragraphs: [
		'Every leader has areas they don\u2019t see clearly.',
		'The healthiest leaders develop the courage and humility to look.',
		'And when you become more aware of yourself, you become more intentional about how you lead others.',
	],
	cta: 'Take the Free Blind Spot Assessment',
} as const;

export type BlindSpotPathway = {
	title: string;
	description: string;
	cta: string;
	href: string;
};

export const blindSpotPathways = {
	title: 'Where Do You Go From Here?',
	intro:
		'Your Blind Spot Assessment can be the beginning of a much bigger leadership journey.',
	pathways: [
		{
			title: 'Individual Coaching',
			description:
				'Create space to explore your leadership, relationships, decisions, challenges, and growth with an experienced leadership coach.',
			cta: 'Explore Leadership Coaching',
			href: '/relationship-leadership-coaching/',
		},
		{
			title: 'Workshops',
			description:
				'Turn awareness into practical skills through workshops focused on leadership, relationships, communication, identity, conflict, and culture.',
			cta: 'Explore Workshops',
			href: '/workshop-facilitator/',
		},
		{
			title: 'Leadership Accelerator',
			description:
				'For leaders ready to go deeper, Leadership Accelerator combines expert guidance, peer learning, practical frameworks, and application over time.',
			cta: 'Explore Leadership Accelerator',
			href: '/leadership-accelerator/',
		},
		{
			title: 'Speaking',
			description:
				'Bring these conversations to your organization, leadership team, conference, or event.',
			cta: 'Book Mark to Speak',
			href: '/keynote-speaker/',
		},
	] satisfies BlindSpotPathway[],
} as const;

export const blindSpotFinalCta = {
	title: 'A Final Question',
	question: 'What might change if you could see what you can\u2019t currently see?',
	paragraphs: [
		'Your blind spots don\u2019t define you.',
		'But they may be influencing you.',
		'Discover them. Understand them. Grow through them.',
	],
	primaryCta: 'Take the Free Assessment',
	secondaryCta: 'Start Your Leadership Journey',
	secondaryHref: '/contact/',
} as const;
