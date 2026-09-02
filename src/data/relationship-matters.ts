export type BookRetailer = {
	lines: string[];
	href: string;
};

export const relationshipMattersSeo = {
	title: 'Relationship Matters',
	description:
		'A practical framework for building healthier relationships—and the cultures those relationships create. For leaders, teams, organizations, families, and couples.',
} as const;

export const bookRetailers: BookRetailer[][] = [
	[
		{
			lines: ['FRIESENPRESS', 'BOOKSTORE'],
			href: 'https://books.friesenpress.com/store/title/119734000135991162/Mark-Gordon-Relationship-Matters',
		},
		{
			lines: ['GOOGLE', 'PLAY'],
			href: 'https://play.google.com/store/books/details/Mark_Gordon_Relationship_Matters?id=TYkfEAAAQBAJ',
		},
		{
			lines: ['APPLE', 'BOOKS'],
			href: 'https://books.apple.com/ca/book/relationship-matters/id1555575810?ign-gact=1',
		},
	],
	[
		{
			lines: ['AMAZON.COM', 'USA'],
			href: 'https://www.amazon.com/Relationship-Matters-Essential-Fostering-Relationships/dp/1525574361',
		},
		{
			lines: ['AMAZON.CA', 'CANADA'],
			href: 'https://www.amazon.ca/Relationship-Matters-Essential-Fostering-Relationships/dp/1525574353',
		},
		{
			lines: ['KINDLE', 'EBOOKS'],
			href: 'https://www.amazon.ca/dp/B08X71B1XC?ref=KC_GS_GB_CA',
		},
	],
];

export const bookHero = {
	title: 'Relationship Matters.',
	subhead: 'Because Every Leadership Challenge Is Ultimately a People Challenge.',
	paragraphs: [
		'Healthy relationships don\u2019t happen by accident.',
		'They are built on trust, communication, authenticity, honesty, and honour.',
		'In Relationship Matters, Mark Gordon provides a practical framework for building healthier relationships\u2014and the cultures those relationships create.',
	],
	primaryCta: 'Get the Book',
	secondaryCta: 'Explore the Five Pillars',
} as const;

export const bigIdea = {
	title: 'Everything We Do Happens in Relationship.',
	lines: [
		'We lead in relationship.',
		'We work in relationship.',
		'We parent in relationship.',
		'We communicate in relationship.',
		'We resolve conflict in relationship.',
	],
	paragraphs: [
		'And when relationships become unhealthy, everything around them is affected.',
		'That\u2019s why Mark Gordon has spent decades exploring a simple but powerful question:',
		'What does it take to build healthy relationships that can withstand real life?',
		'Relationship Matters is the result of that journey.',
		'It provides practical principles and tools for building relationships that are healthier, more trusting, more authentic, and more resilient.',
	],
} as const;

export const fivePillars = {
	title: 'Five Pillars. One Healthy Foundation.',
	intro:
		'Every strong relationship needs a foundation. Mark identifies five essential pillars that create that foundation.',
	pillars: [
		{
			number: '01',
			title: 'Trust',
			tagline: 'Build Trust Equity.',
			body: 'Trust is built over time through consistent actions. Healthy relationships require people to know they can depend on one another.',
		},
		{
			number: '02',
			title: 'Communication',
			tagline: 'Say What Needs to Be Said.',
			body: 'Communication isn\u2019t simply about talking. It\u2019s about learning how to listen, understand, clarify, and communicate in ways that strengthen connection rather than create distance.',
		},
		{
			number: '03',
			title: 'Authenticity',
			tagline: 'Be Real.',
			body: 'Healthy relationships require people who are willing to show up honestly. Authenticity creates connection because people can relate to who we really are\u2014not simply the version we think they want to see.',
		},
		{
			number: '04',
			title: 'Honesty',
			tagline: 'Truth Builds Strength.',
			body: 'Honesty can be uncomfortable. But avoiding truth doesn\u2019t make a relationship healthier. Learning to speak truth with wisdom, courage, and respect creates stronger relationships.',
		},
		{
			number: '05',
			title: 'Honour',
			tagline: 'Treat People as Valuable.',
			body: 'Honour recognizes the value and dignity of another person\u2014even when you disagree. It changes the way we communicate, handle conflict, and respond to one another.',
		},
	],
} as const;

export const houseMetaphor = {
	title: 'Build Something That Can Withstand Real Life.',
	levels: [
		{
			label: 'Foundation',
			title: 'The Five Pillars',
			items: ['Trust', 'Communication', 'Authenticity', 'Honesty', 'Honour'],
		},
		{
			label: 'Framework',
			title: 'How We Move Together',
			description:
				'Understanding motivation, influence, responsibility, and shared direction.',
		},
		{
			label: 'Roof',
			title: 'Creating Healthy Boundaries',
			description:
				'Understanding roles, authority, responsibility, and protection within relationships.',
		},
	],
} as const;

export const leadershipConnection = {
	title: 'Relationship Matters at Work Too.',
	paragraphs: [
		'The same principles that strengthen relationships at home also influence the relationships we build at work.',
	],
	bullets: [
		'Trust affects teams.',
		'Communication affects performance.',
		'Authenticity affects connection.',
		'Honesty affects culture.',
		'Honour affects how people treat one another.',
	],
	closing:
		'When those foundations are healthy, people are more likely to communicate openly, navigate conflict constructively, and work together effectively.',
	tagline: 'Healthy relationships create healthy cultures.',
} as const;

export const forLeaders = {
	title: 'Leadership Is Always Relational.',
	paragraphs: [
		'You can have the best strategy in the world.',
		'But eventually, people have to carry it out.',
		'That means leadership depends on relationships.',
	],
	considerations: [
		'How you communicate.',
		'How you listen.',
		'How you handle conflict.',
		'How you respond when someone disagrees.',
		'How you treat people when you\u2019re under pressure.',
		'And whether people trust you enough to tell you the truth.',
	],
	closing:
		'The five pillars of Relationship Matters give leaders a practical foundation for examining those relationships.',
} as const;

export const forFamilies = {
	title: 'And Yes\u2014Relationship Matters at Home.',
	paragraphs: [
		'The principles aren\u2019t limited to organizations. They were born from a desire to help people create healthier relationships at home as well.',
		'Whether you\u2019re trying to strengthen a marriage, improve communication with your children, rebuild trust, or create a healthier family culture, the same foundational principles apply.',
		'Healthy families don\u2019t happen by accident.',
		'They are built intentionally.',
	],
} as const;

export const whatYoullFind = {
	title: 'More Than Ideas. A Practical Framework.',
	intro:
		'Relationship Matters is designed to give you language, structure, and practical tools\u2014not simply things to think about.',
	outcomes: [
		'Build trust equity',
		'Communicate more effectively',
		'Develop authentic connection',
		'Practice healthy honesty',
		'Reclaim the lost art of honour',
		'Understand relational patterns',
		'Create healthier cultures',
		'Build relationships that can withstand real life',
	],
} as const;

export const whoIsItFor = {
	title: 'Relationship Matters Is For Anyone Who Leads, Loves, or Lives With People.',
	audiences: [
		{
			title: 'Leaders',
			description:
				'Use the principles to strengthen your leadership relationships and organizational culture.',
		},
		{
			title: 'Teams',
			description: 'Use the framework to create stronger communication and trust.',
		},
		{
			title: 'Couples',
			description: 'Build a stronger foundation for your relationship.',
		},
		{
			title: 'Families',
			description: 'Develop a healthier relational culture at home.',
		},
		{
			title: 'Small Groups',
			description: 'Use the material as a shared conversation and development experience.',
		},
		{
			title: 'Churches & Nonprofits',
			description: 'Apply the principles to leadership, teams, and community.',
		},
	],
} as const;

export const bookSection = {
	title: 'Get Your Copy of Relationship Matters',
	subtitle: 'The Essential Blueprint for Building Healthy Relationships',
	copy: 'If you\u2019re ready to strengthen the relationships that matter most, Relationship Matters gives you a practical place to start.',
	cta: 'Get the Book',
} as const;

export const courseSection = {
	title: 'Want to Go Deeper?',
	body: 'The Relationship Matters online course takes the five pillars beyond the book. Through video teaching, practical exercises, and guided reflection, participants can work through the material individually or together as a couple, family, small group, or organization.',
	cta: 'Explore the Relationship Matters Course',
	href: '/courses/relationship-matters/',
} as const;

export const speakingSection = {
	title: 'Relationship Matters Is Also a Conversation for Leaders.',
	body: 'The five pillars provide a powerful foundation for keynote presentations and leadership workshops. Mark can bring Relationship Matters into your organization to explore:',
	topics: [
		'Trust',
		'Communication',
		'Authenticity',
		'Honesty',
		'Honour',
		'Relational culture',
		'Leadership',
	],
	cta: 'Bring Relationship Matters to Your Team',
	href: '/keynote-speaker/',
} as const;

export const bookTestimonial = {
	quote:
		'Mark has outlined 5 critical pillars that provide a roadmap for individuals wanting to create a family environment that supports its members to become healthy, content, competent and flourishing adults.',
	author: 'Dr. Wayne Hammond',
	credentials: [
		'Founding Partner and CSO, Flourishing Life',
		'Adjunct Professor, Ambrose University',
	],
} as const;

export const finalCta = {
	title: 'What Would Change If Your Relationships Became Healthier?',
	lines: ['At home.', 'At work.', 'In leadership.', 'In your team.', 'In your organization.'],
	body: 'Relationship matters because people matter. And healthier relationships create healthier places for people to live, work, lead, and thrive.',
	primaryCta: 'Get the Book',
	secondaryCta: 'Bring Mark to Speak',
	secondaryHref: '/keynote-speaker/',
} as const;
