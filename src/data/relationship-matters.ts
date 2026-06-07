export type BookRetailer = {
	lines: string[];
	href: string;
};

export const bookRetailers: BookRetailer[][] = [
	[
		{
			lines: ['FRIESENPRESS BOOKSTORE'],
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

export const bookPillars = [
	{
		title: 'Building a Healthy Foundation',
		description: 'discusses the five fundamental pillars of a healthy relationship.',
	},
	{
		title: 'Building a Strong Framework',
		description:
			'teaches how to motivate family members, so they each flow in a common or shared direction.',
	},
	{
		title: 'Building a Sturdy Roof',
		description:
			'introduces relational protection through fostering an understanding of authority and family roles.',
	},
];

export const bookTestimonial = {
	quote:
		'Relationship Matters is a timely invitation and inspiring guide for what it means to live an empowered and purposeful life in relationship with others. In an insightful and practical way, Mark has outlined 5 critical pillars that provide a roadmap and strategic action plan for individuals wanting to create a family environment that is transformational in the way it supports its members to become healthy, content, competent and flourishing adults.',
	author: 'Dr. Wayne Hammond',
	credentials: [
		'Founding Partner and CSO Flourishing Life',
		'Adjunct Professor at Ambrose University',
	],
};
