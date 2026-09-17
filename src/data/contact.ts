import { hubspot } from '@/config/site';

export const contactSeo = {
	title: 'Contact Mark Gordon | Start a Conversation',
	description:
		'Reach out about speaking, workshops, leadership coaching, Leadership Accelerator, or faith community packages. Low-pressure — tell Mark what you are working through.',
} as const;

export const contactHero = {
	eyebrow: 'Contact',
	title: "Let's Start a Conversation.",
	shortIntro:
		"Whether you're looking for a speaker, developing your leaders, navigating a challenge, or simply wondering what the next step could look like, I'd love to hear what's happening.",
	extendedIntro: [
		"You don't need to have it all figured out before you reach out.",
		"Tell me a little about what you're facing, what you're hoping to accomplish, or what you're looking for—and we'll start there.",
	],
	primaryCta: 'Start the Conversation',
	formAnchor: '#contact-form',
} as const;

export const contactFormSection = {
	title: 'Send Me a Message',
	intro: "I'd love to hear from you.",
} as const;

export const contactHelp = {
	title: 'How Can I Help?',
	items: [
		{
			title: 'Bring Mark In to Speak',
			body:
				'Looking for a keynote speaker or facilitator who can engage your people and leave them with practical tools they can use?',
			links: [
				{ label: 'Book Mark to Speak', href: hubspot.discoveryCall, external: true },
				{ label: 'Explore Speaking Topics', href: '/keynote-speaker/' },
			],
		},
		{
			title: 'Develop Your Leaders',
			body:
				"Looking to strengthen your leadership team, develop emerging leaders, or build a healthier leadership culture? Let's talk about what your organization needs.",
			links: [
				{ label: 'Explore Workshops', href: '/workshop-facilitator/' },
				{ label: 'Explore Leadership Accelerator', href: '/leadership-accelerator/', external: false },
			],
		},
		{
			title: 'Leadership Coaching',
			body:
				'Sometimes the best next step is simply having someone outside the situation who can listen, ask good questions, and help you see what you may not be seeing.',
			links: [{ label: 'Explore Coaching', href: '/relationship-leadership-coaching/' }],
		},
		{
			title: 'Supporting Your Church',
			body:
				"If you're a pastor or church leader navigating leadership challenges, developing your team, or working through relational or organizational issues, let's have a conversation.",
			links: [{ label: 'Explore Faith Community Packages', href: '/faith-community-packages/' }],
		},
	],
} as const;

export const contactProcess = {
	title: 'What Happens Next?',
	steps: [
		{
			title: 'You reach out',
			body:
				"Tell me a little about who you are, what you're working through, and what you're hoping to accomplish.",
		},
		{
			title: 'We talk',
			body:
				"We'll have a conversation about your situation, your goals, and whether I might be able to help.",
		},
		{
			title: 'We find the right next step',
			body:
				"Sometimes that's a keynote. Sometimes it's a workshop. Sometimes it's coaching or Leadership Accelerator. And sometimes the right answer is simply a conversation and a few practical ideas.",
		},
	],
	close: 'No pressure. Just a conversation.',
} as const;

export const contactNotSure = {
	title: 'Not Sure Where to Start?',
	body: "That's okay.",
	hint: `You can simply write: "I'm not sure what I need, but here's what's happening…"`,
	close: "That's often the best place to begin.",
} as const;
