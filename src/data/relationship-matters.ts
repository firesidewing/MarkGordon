export type BookRetailer = {
	lines: string[];
	href: string;
};

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
	subtitle: 'The essential blueprint for building strong families and fostering healthy relationships',
	hook:
		'When home feels strained — marriage distant, kids out of control, conversations going nowhere — you need more than tips. You need a foundation you can build on together.',
};

export const bookIntro = {
	lead:
		'Are you at a loss to understand how your marriage has become so miserable, or do you wonder why your children are completely out of control?',
	body:
		'Relationship Matters is designed to help you and your family figure out what went wrong and create a healthy relational culture at home. Using the metaphor of constructing a strong house, the book walks you through three sections — foundation, framework, and roof.',
};

export const bookPillars = [
	{
		title: 'Building a Healthy Foundation',
		description:
			'The five fundamental pillars every healthy relationship rests on — trust, communication, authenticity, honesty, and honour.',
	},
	{
		title: 'Building a Strong Framework',
		description:
			'How to motivate family members so everyone moves in a shared direction instead of pulling apart.',
	},
	{
		title: 'Building a Sturdy Roof',
		description:
			'Relational protection through a clear understanding of authority, roles, and boundaries at home.',
	},
];

export const bookOutcomes = [
	'Understand what went wrong in your family dynamics',
	'Build trust equity with the people who matter most',
	'Create authentic connection — starting with yourself',
	'Establish a healthy family culture that lasts',
];

export const bookCoursePromo = {
	title: 'Ready to go deeper?',
	body:
		'The Relationship Matters online course walks you through all five pillars with video lessons, workbooks, and practical challenges you can do as a couple, family, or small group.',
	href: '/courses/relationship-matters/',
	price: 79,
};

export const bookTestimonial = {
	quote:
		'Relationship Matters is a timely invitation and inspiring guide for living with purpose in relationship with others. In an insightful and practical way, Mark has outlined 5 critical pillars that provide a roadmap for individuals wanting to create a family environment that supports its members to become healthy, content, competent and flourishing adults.',
	author: 'Dr. Wayne Hammond',
	credentials: [
		'Founding Partner and CSO, Flourishing Life',
		'Adjunct Professor at Ambrose University',
	],
};
