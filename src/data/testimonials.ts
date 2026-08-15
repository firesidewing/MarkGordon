export type Testimonial = {
	quote: string;
	author: string;
	role?: string;
};

/** Short excerpts for homepage carousel — leadership/speaking framing */
export const homeTestimonialExcerpts: Testimonial[] = [
	{
		quote:
			'He consistently receives the highest ratings in evaluations and feedback from participants.',
		author: 'Ron Schlitt',
		role: 'Lead Strengths Facilitator',
	},
	{
		quote:
			"He's funny, to the point, helpful, and engaging.",
		author: 'Gary Chupik',
		role: 'Owner, Gary Chupik Leadership LLC',
	},
	{
		quote:
			'Mark has the ability to communicate truth with passion and compassion.',
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

/** Full testimonials — inner pages and legacy use */
export const homeTestimonials: Testimonial[] = [
	{
		quote:
			'Mark Gordon has three traits you look for in an exceptional relationship coach: passion, skill, and exceptional insight. Whether a relationship at home or in business is strained, broken, or unfulfilling, Mark can help. I highly recommend Mark and trust him with my own family.',
		author: 'Gary Chupik',
		role: 'Owner at Gary Chupik Leadership LLC',
	},
	{
		quote:
			'In a 2nd marriage with seven children between us, we wanted solid advice and tested principles we could use to transform our own relationship when it was on the brink of hopeless disaster! Highly recommend him and his book — it has improved our lives and love!',
		author: 'Sue Styles',
		role: 'Business Consultant, Speaker & Author',
	},
	{
		quote:
			'Mark is a valued life coach and mentor. His insights and applications come out of his personal experiences, not just words alone. He has lived what he speaks. I endorse Mark Gordon.',
		author: 'Wes Jonat',
		role: 'Owner — Sun Valley Pools & Spas',
	},
	{
		quote:
			'I have had the pleasure engaging Mark as a facilitator on many occasions. He consistently receives the highest ratings in evaluations. Mark wraps all his sessions around respect, honour and trust to each individual.',
		author: 'Ron Schlitt',
		role: 'Lead Strengths Facilitator',
	},
];
