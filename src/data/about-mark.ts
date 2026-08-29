import type { Testimonial } from '@/data/testimonials';

export const aboutHero = {
	title: "Leadership Isn't Just What I Do. It's What I've Spent My Life Learning.",
	subhead:
		"For more than 35 years, I've had the privilege—and sometimes the challenge—of leading people, developing leaders, navigating difficult relationships, and learning what it really takes to create healthy cultures.",
	close:
		'Today, I bring those experiences into the room as a speaker, leadership facilitator, coach, and author.',
	primaryCta: 'Book Mark to Speak',
	secondaryCta: 'Explore Speaking Topics',
	secondaryHref: '/keynote-speaker/#signature-keynotes',
} as const;

export const aboutStory = {
	title: "I've Learned Leadership From The Inside Out.",
	paragraphs: [
		"I've spent more than three decades in leadership.",
		'For over 35 years, I served as a pastor, leading people through seasons of growth, change, conflict, uncertainty, success, disappointment, and everything in between.',
		'And one thing became increasingly clear:',
	],
	insights: [
		'Leadership is never just about getting the job done.',
		"It's about people.",
		"It's about trust.",
		"It's about communication.",
		"It's about knowing who you are when the pressure is on.",
		"It's about what happens when people disagree.",
		"And ultimately, it's about the culture we create around us.",
	],
	close:
		'Those lessons shaped the way I lead—and eventually shaped the way I teach, coach, and speak.',
} as const;

export const aboutTransition = {
	title: 'A New Chapter, Same Calling.',
	paragraphs: [
		'In 2021, after more than three decades of pastoral leadership, I stepped away from my role as a Lead Pastor and began a new chapter focused on leadership coaching, training, and speaking.',
		"I didn't leave leadership behind.",
		'I brought everything I had learned with me.',
	],
	highlights: [
		'The difficult conversations.',
		'The leadership mistakes.',
		'The breakthroughs.',
		'The failures.',
		'The moments when people surprised me.',
		'The moments when I surprised myself.',
		"And the realization that many of the challenges leaders face aren't solved by another strategy.",
		'They are solved by becoming healthier leaders.',
	],
	close:
		'Today, I have the privilege of helping leaders and organizations do exactly that.',
} as const;

export const aboutMessage = {
	title: 'Healthy Leaders Build Healthy Cultures.',
	paragraphs: [
		'This has become the central message behind my work.',
		'I believe healthy organizations begin with healthy leaders.',
		'Healthy leaders build healthy relationships.',
		'Healthy relationships create healthy cultures.',
		'And healthy cultures allow people to thrive.',
	],
	questionsIntro:
		"That's why my speaking, workshops, Leadership Accelerator, and coaching all connect around the same fundamental questions:",
	questions: [
		'How healthy are we?',
		'How are we showing up as leaders?',
		'What are our blind spots?',
		'How are our relationships affecting our culture?',
		'And what needs to change for people to thrive?',
	],
} as const;

export type AboutPillar = {
	title: string;
	description: string;
};

export const aboutWhatIBring = {
	title: 'Practical. Relational. Real.',
	intro:
		"I'm not interested in simply giving people something interesting to think about. I want to give them something they can actually use.",
	pillars: [
		{
			title: 'Real Experience',
			description:
				"More than 35 years of leadership experience means I've had a front-row seat to both the challenges and opportunities of leading people.",
		},
		{
			title: 'Practical Tools',
			description:
				'I believe insight becomes valuable when people know what to do with it.',
		},
		{
			title: 'Engaging Storytelling',
			description:
				'Some of the most important leadership lessons are best remembered through a story.',
		},
		{
			title: 'Honest Conversation',
			description:
				"I'm willing to talk about the things leaders often avoid—including conflict, shame, identity, blind spots, trust, anger, and difficult relationships.",
		},
		{
			title: 'Hope',
			description:
				"Leadership development shouldn't leave people feeling defeated. It should leave them believing change is possible.",
		},
	] satisfies AboutPillar[],
} as const;

export const aboutRelationalThread = {
	title: 'Because Relationship Matters.',
	paragraphs: [
		'My work has always been deeply relational.',
		"That's why I wrote Relationship Matters.",
		'The premise is simple:',
		'The quality of our relationships profoundly affects the quality of our lives and our leadership.',
	],
	principlesIntro:
		'The five foundational principles in Relationship Matters—Trust, Communication, Authenticity, Honesty, and Honour—continue to shape the way I speak, coach, and develop leaders.',
	principles: ['Trust', 'Communication', 'Authenticity', 'Honesty', 'Honour'],
	close:
		"What started as a framework for healthier relationships has become part of a much bigger leadership conversation. Because whether you're leading a company, a nonprofit, a church, or a team: Leadership is always relational.",
	bookHref: '/relationship-matters/',
} as const;

export type AboutCredential = {
	value: string;
	label: string;
};

export const aboutCredentials = {
	title: 'A Lifetime of Leadership Experience',
	stats: [
		{ value: '35+', label: 'Years of Leadership' },
		{ value: 'Speaker', label: 'Keynotes & Workshops' },
		{ value: 'Coach', label: 'Executive & Leadership Coaching' },
		{ value: 'Author', label: 'Relationship Matters' },
		{ value: 'Leadership Developer', label: 'Leadership Accelerator & Training' },
	] satisfies AboutCredential[],
} as const;

export const aboutWhoIServe = {
	title: 'I Work With Leaders Who Want More Than The Status Quo.',
	intro:
		'My work spans several environments, but the common denominator is always the same: Leaders who care about people and want to lead well.',
	audiences: [
		{
			title: 'Business Leaders',
			description:
				'Leaders who want stronger teams, healthier communication, and a culture where people perform and thrive.',
		},
		{
			title: 'Nonprofit Leaders',
			description:
				'Leaders navigating complex people dynamics while staying focused on mission.',
		},
		{
			title: 'Church & Faith-Based Leaders',
			description:
				'Pastors and ministry leaders who want to develop healthy leadership cultures and stronger teams.',
		},
		{
			title: 'Leadership Teams',
			description:
				'Groups who want to move beyond simply working together toward genuinely leading together.',
		},
	],
} as const;

export const aboutPersonal = {
	title: 'Beyond Leadership',
	paragraphs: [
		"Leadership isn't my whole life.",
		"I'm a husband, father, grandfather, speaker, coach, author, and lifelong student of people.",
		"I'm married to my wife of more than four decades, and together we've watched our three children build families of their own. We now have two grandchildren who continue to remind me that some of life's most important lessons have nothing to do with leadership.",
	],
	mobileShort:
		"I'm a husband, father, grandfather, and lifelong student of people — married for more than four decades with three grown children and two grandchildren.",
	lessonsIntro: 'Family has taught me many of the things I now talk about professionally:',
	lessons: [
		'Listen.',
		'Be present.',
		"Admit when you're wrong.",
		'Celebrate people.',
		"Don't take yourself too seriously.",
		'And remember that relationships matter more than being right.',
	],
} as const;

export const aboutTestimonialExcerpts: Testimonial[] = [
	{
		quote:
			'Mark has the ability to take the difficult topics and issues people face and bring sensibility and solutions that can be acted on immediately.',
		author: 'Ron Schlitt',
		role: 'Lead Strengths Facilitator',
	},
	{
		quote:
			"Mark is a valued life coach and mentor. His insights and applications come out of his personal experiences, not just words alone. He has lived what he speaks.",
		author: 'Wes Jonat',
		role: 'Owner, Sun Valley Pools & Spas',
	},
	{
		quote:
			'Mark Gordon has three traits you look for in an exceptional relationship coach: passion, skill, and exceptional insight.',
		author: 'Gary Chupik',
		role: 'Owner, Gary Chupik Leadership LLC',
	},
];

export const aboutFinalCta = {
	title: "Let's Start A Conversation.",
	body:
		"Whether you're looking for a keynote speaker, developing your leadership team, or looking for a deeper coaching relationship, I'd love to hear what you're working through.",
	primaryCta: 'Book Mark to Speak',
	secondaryCta: 'Start a Conversation',
} as const;

export const aboutSeo = {
	title: 'About Mark Gordon | Leadership Speaker & Coach',
	description:
		'Mark Gordon brings 35+ years of leadership experience to speaking, workshops, and coaching. Learn his story and why healthy leaders build healthy cultures.',
} as const;
