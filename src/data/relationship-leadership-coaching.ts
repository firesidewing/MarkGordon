import type { Testimonial } from '@/data/testimonials';

export const coachingSeo = {
	title: 'Leadership Coaching | Mark Gordon',
	description:
		'Practical, relational leadership coaching for leaders who want greater clarity, stronger relationships, and greater impact. Start a coaching conversation with Mark Gordon.',
} as const;

export const coachingHero = {
	eyebrow: 'Leadership Coaching',
	title: 'Leadership Gets Personal.',
	subhead:
		'The decisions you make, the relationships you build, and the culture you create all begin with the leader you are becoming.',
	body: 'Mark Gordon provides practical, relational leadership coaching for leaders who want greater clarity, stronger relationships, and greater impact.',
	primaryCta: 'Start a Coaching Conversation',
	secondaryCta: 'Book a Discovery Call',
} as const;

export const coachingOpening = {
	title: "You Don't Have to Figure It Out Alone.",
	lines: [
		'Leadership can be rewarding.',
		'It can also be lonely.',
		"There are decisions you can't always talk through with your team.",
		'Relationships that become complicated.',
		"Conversations you're avoiding.",
		'Challenges that keep showing up.',
	],
	insight: "I need someone outside the situation who can help me see what I'm not seeing.",
	closing:
		"That's where coaching can make a difference. Mark provides a confidential space for leaders to slow down, think clearly, explore what's really happening, identify blind spots, and determine what needs to happen next.",
} as const;

export const coachingAbout = {
	title: "Coaching Isn't About Giving You All the Answers.",
	intro: "It's about helping you ask better questions.",
	body: "Mark doesn't come into a coaching relationship with a predetermined formula for how you should lead. Instead, he helps you uncover what's happening beneath the surface so you can make better decisions and lead with greater intention.",
	exploreLabel: 'Together, you may explore:',
	exploreItems: [
		"What you're facing",
		"What you're thinking",
		"What you're feeling",
		"What you're avoiding",
		"What you're not seeing",
		'What your relationships are telling you',
		'What needs to change',
		'What your next step should be',
	],
	goal: "The goal isn't dependence on a coach. The goal is greater capacity in the leader.",
} as const;

export type CoachingAudience = {
	title: string;
	description: string;
};

export const coachingAudiences = {
	title: 'Coaching Is For Leaders Who Are Ready to Grow.',
	audiences: [
		{
			title: 'Executives & Senior Leaders',
			description:
				'Leaders carrying significant responsibility who need a confidential place to think, process, and make important decisions.',
		},
		{
			title: 'Business Owners',
			description:
				'Entrepreneurs and business leaders navigating growth, people challenges, culture, transitions, or difficult decisions.',
		},
		{
			title: 'Nonprofit Leaders',
			description:
				'Leaders balancing mission, people, organizational complexity, and personal sustainability.',
		},
		{
			title: 'Pastors & Faith-Based Leaders',
			description:
				'Leaders carrying the unique pressures of leading people, teams, ministries, and communities.',
		},
		{
			title: 'Emerging Leaders',
			description:
				'Leaders stepping into greater responsibility who want to develop healthy leadership patterns early.',
		},
		{
			title: 'Leaders in Transition',
			description:
				'People navigating a new role, organizational change, conflict, uncertainty, or a significant season of personal or professional change.',
		},
	] satisfies CoachingAudience[],
} as const;

export type CoachingFocusArea = {
	title: string;
	question: string;
};

export const coachingFocusAreas = {
	title: 'Bring the Real Issue.',
	intro:
		"Coaching doesn't have to fit into a neat category. Bring what's actually happening. Common areas of focus include:",
	areas: [
		{
			title: 'Leadership Effectiveness',
			question: 'How are you showing up as a leader?',
		},
		{
			title: 'Blind Spots',
			question: 'What might you be missing that others can see?',
		},
		{
			title: 'Communication',
			question: 'How can you communicate more clearly, courageously, and effectively?',
		},
		{
			title: 'Difficult Conversations',
			question: "What conversation are you avoiding—and what is it costing you?",
		},
		{
			title: 'Conflict',
			question: 'How can you navigate disagreement without damaging relationships?',
		},
		{
			title: 'Decision-Making',
			question: "How do you make wise decisions when the path isn't obvious?",
		},
		{
			title: 'Confidence & Identity',
			question: 'Are you leading from who you are—or from who you think you need to be?',
		},
		{
			title: 'Relationships',
			question: 'How are your relationships affecting your leadership?',
		},
		{
			title: 'Culture',
			question: 'What are your leadership behaviours creating around you?',
		},
	] satisfies CoachingFocusArea[],
} as const;

export const coachingBlindSpot = {
	title: "Sometimes the Thing Holding You Back Is the Thing You Can't See.",
	paragraphs: [
		'Every leader has blind spots.',
		"They're simply the things about ourselves that are easier for other people to see than they are for us to see.",
		"Mark's coaching approach helps leaders become more aware of the patterns, assumptions, behaviours, and beliefs that may be affecting their leadership.",
		'Where appropriate, coaching can be supported by the Blind Spot Assessment to create a deeper starting point for the conversation.',
	],
	cta: 'Explore the Blind Spot Assessment',
	href: '/blind-spot-assessment/',
} as const;

export const coachingRelational = {
	title: 'Leadership Is Always Relational.',
	paragraphs: [
		"You don't lead in isolation. You lead people.",
		'And the quality of your relationships affects everything from communication and trust to team performance and culture.',
		"That's why Mark's coaching approach doesn't separate leadership from relationships. Instead, it explores how the two influence each other.",
		'Healthy leadership requires healthy relationships. And healthy relationships require healthy leaders.',
	],
} as const;

export type CoachingPillar = {
	title: string;
	description: string;
};

export const coachingApproach = {
	title: 'Practical. Honest. Relational.',
	pillars: [
		{
			title: 'Practical',
			description:
				'Coaching should lead somewhere. The goal is to translate insight into action.',
		},
		{
			title: 'Honest',
			description:
				"Real growth requires the courage to look honestly at what's happening—including the things we may not want to see.",
		},
		{
			title: 'Relational',
			description:
				'Leadership is about people. The coaching relationship itself provides a safe environment for honest conversation and growth.',
		},
		{
			title: 'Hopeful',
			description: "Growth doesn't require perfection. It requires willingness.",
		},
	] satisfies CoachingPillar[],
} as const;

export type CoachingProcessStep = {
	title: string;
	description: string;
};

export const coachingProcess = {
	title: 'A Place to Slow Down. Think Clearly. Move Forward.',
	intro:
		'Coaching is different for every leader. Some leaders come with a specific challenge. Others recognize a pattern they want to change. Some are preparing for a significant leadership transition. Others simply want to become a better leader before a problem develops.',
	stepsLabel: 'The coaching relationship may include:',
	steps: [
		{ title: 'Reflection', description: "Understanding what's really happening." },
		{ title: 'Awareness', description: 'Identifying patterns and blind spots.' },
		{ title: 'Clarity', description: 'Determining what matters most.' },
		{ title: 'Action', description: 'Creating practical next steps.' },
		{ title: 'Accountability', description: 'Following through and learning from the experience.' },
	] satisfies CoachingProcessStep[],
} as const;

export const coachingWhyMark = {
	title: 'Experience You Can Bring Into the Conversation.',
	paragraphs: [
		'Mark has spent more than 35 years leading people, developing leaders, navigating difficult relationships, and walking with people through challenging seasons.',
		'His coaching is shaped by lived leadership experience—not simply academic theory.',
		'He understands what it means to make decisions when the stakes are high. To navigate conflict. To lead through change. To carry responsibility for other people. To discover your own blind spots. And to learn from mistakes.',
		'Mark brings that experience into every coaching relationship.',
	],
} as const;

export const coachingDeeperConnection = {
	title: 'Speaking Starts the Conversation. Coaching Takes It Deeper.',
	paragraphs: [
		'Many leaders first encounter Mark through a keynote, workshop, assessment, or leadership-development experience.',
		'Sometimes the insight from that experience raises a more personal question: "What does this mean for me as a leader?"',
		"That's where coaching begins.",
		'Coaching provides the space to take the ideas and apply them to your actual leadership, relationships, decisions, and circumstances.',
	],
} as const;

export const coachingAccelerator = {
	title: 'Need Leadership Development for More Than One Leader?',
	body: "If you're looking to develop a group of leaders rather than work with one leader individually, Leadership Accelerator may be a better fit. Leadership Accelerator provides a cohort-based leadership development experience combining expert guidance, practical frameworks, and peer learning.",
	cta: 'Explore Leadership Accelerator',
	href: '/contact/',
} as const;

export const coachingTestimonials: Testimonial[] = [
	{
		quote:
			'Mark has three traits you look for in an exceptional relationship coach: passion, skill, and exceptional insight. Mark has an uncanny ability to see what\'s going on beneath the surface and bring up and draw out practical solutions that we can apply immediately. He is never condescending, always respectful, very honoring, and relentlessly loving and hopeful.',
		author: 'Gary Chupik',
		role: 'Owner, Gary Chupik Leadership LLC',
	},
	{
		quote:
			'Mark is a valued life coach and mentor. His insights and applications come out of his personal experiences, not just words alone. He has lived what he speaks.',
		author: 'Wes Jonat',
		role: 'Owner, Sun Valley Pools & Spas',
	},
	{
		quote:
			'Mark has the ability to take the difficult topics and issues people face and bring sensibility and solutions that can be acted on immediately.',
		author: 'Ron Schlitt',
		role: 'Lead Strengths Facilitator',
	},
];

export type CoachingOption = {
	title: string;
	description: string;
	cta: string;
	href: string;
	external?: boolean;
};

export const coachingOptions = {
	title: 'Choose the Level of Support You Need.',
	options: [
		{
			title: 'Individual Coaching',
			description:
				'One-on-one leadership coaching for leaders who want focused support around specific challenges or ongoing development.',
			cta: 'Start a Conversation',
			href: '/contact/',
		},
		{
			title: 'Ongoing Coaching',
			description:
				'For leaders who want a longer-term coaching relationship with regular accountability and development.',
			cta: 'Talk With Mark',
			href: '/contact/',
		},
		{
			title: 'Organizational Leadership Coaching',
			description:
				'For organizations wanting coaching support for executives, senior leaders, or emerging leaders.',
			cta: "Let's Talk About Your Team",
			href: '/contact/',
		},
	] satisfies CoachingOption[],
} as const;

export const coachingBookingClose = {
	title: 'What Would Change If You Had a Place to Think Out Loud?',
	body: [
		"You don't need to have everything figured out before you reach out.",
		'Bring the challenge. Bring the question. Bring the decision. Bring the leadership issue you can\'t quite put your finger on.',
		"Let's start there.",
	],
	primaryCta: 'Start a Coaching Conversation',
	secondaryCta: 'Book a Discovery Call',
} as const;
