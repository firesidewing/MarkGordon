export const resourcesSeo = {
	title: 'Resources',
	description:
		'Practical leadership resources from Mark Gordon — Leadership Accelerator, Relationship Matters, Blind Spot Assessment, online courses, blog, videos, and faith community tools.',
} as const;

export const resourcesHero = {
	eyebrow: 'Resources',
	title: 'Keep Growing. Keep Learning. Keep Leading.',
	subtitle:
		'Practical resources to help you become a healthier leader, build stronger relationships, and create a healthier culture.',
	paragraphs: [
		'Leadership development doesn’t end when the keynote is over or the workshop ends.',
		'The most meaningful growth happens when we continue to reflect, learn, practice, and apply what we’ve discovered.',
		'Mark has created a growing collection of resources to help you do exactly that.',
	],
} as const;

export type ResourceDeepLink = {
	title: string;
	tagline: string;
	mobileDescription: string;
	description: string;
	cta: string;
	href: string;
};

export const goDeeperSection = {
	title: 'Go Deeper',
	items: [
		{
			title: 'Leadership Accelerator',
			tagline: 'Leadership development that moves from insight to action.',
			mobileDescription:
				'A cohort-based experience with expert guidance, peer learning, and real-world application.',
			description:
				'A cohort-based leadership experience combining expert guidance, peer learning, practical frameworks, and real-world application.',
			cta: 'Explore Leadership Accelerator',
			href: '/leadership-accelerator/',
		},
		{
			title: 'Relationship Matters',
			tagline: 'Because every leadership challenge is ultimately a people challenge.',
			mobileDescription:
				'Mark’s five-pillar framework for healthier relationships: Trust, Communication, Authenticity, Honesty, Honour.',
			description:
				'Mark’s foundational five-pillar framework for building healthier relationships: Trust · Communication · Authenticity · Honesty · Honour. Explore the book, framework, and resources designed to help individuals, teams, families, and organizations build stronger relationships.',
			cta: 'Explore Relationship Matters',
			href: '/relationship-matters/',
		},
		{
			title: 'Blind Spot Assessment',
			tagline: 'Every leader has blind spots. The question is whether yours are costing you.',
			mobileDescription:
				'A free assessment to discover leadership and relationship blind spots in just a few minutes.',
			description:
				'Discover areas of your leadership, relationships, and behaviour that may be affecting your effectiveness—often in ways you don’t see yourself. The free assessment takes only a few minutes and can become the starting point for greater self-awareness and growth.',
			cta: 'Take the Free Assessment',
			href: '/blind-spot-assessment/',
		},
	] satisfies ResourceDeepLink[],
} as const;

export const onlineCoursesSection = {
	title: 'Online Courses',
	subtitle: 'Learn at Your Own Pace.',
	intro:
		'For those who want to go deeper on their own schedule, Mark offers practical online courses focused on leadership, relationships, personal growth, and emotional health.',
	cta: 'Explore Online Courses',
	ctaHref: '/online-courses/',
	courses: [
		{
			title: 'Relationship Matters',
			description: 'Explore the five pillars that provide a foundation for healthy relationships.',
			href: '/courses/relationship-matters/',
		},
		{
			title: 'Understanding Anger',
			description:
				'Understand anger, its impact on relationships and decision-making, and practical ways to respond differently.',
			href: '/courses/understanding-anger/',
		},
		{
			title: 'Punching Shame in the Face',
			description:
				'Explore the roots of shame and develop tools for rebuilding confidence and living with greater freedom.',
			href: '/courses/punching-shame-in-the-face/',
		},
		{
			title: 'Godfidence',
			description:
				'Develop a healthier understanding of identity, confidence, and who God created you to be.',
			href: '/courses/godfidence-building-confidence-that-lasts-forever/',
		},
	],
} as const;

export const articlesSection = {
	title: 'Articles & Insights',
	subtitle: 'Practical Thoughts for Real Life and Leadership.',
	intro:
		'Mark regularly shares insights drawn from decades of leadership, coaching, relationships, and personal experience.',
	topics: [
		'Leadership',
		'Relationships',
		'Communication',
		'Culture',
		'Self-awareness',
		'Conflict',
		'Identity',
		'Personal growth',
		'Faith and leadership',
	],
	cta: 'Read the Blog',
	href: '/blog/',
} as const;

export const videosSection = {
	title: 'Videos',
	subtitle: 'Sometimes You Need to See It and Hear It.',
	intro:
		'Explore Mark’s teaching, conversations, leadership insights, and practical tools through video. Whether you’re looking for a short leadership thought or a deeper conversation, these videos are designed to give you something you can take with you.',
	cta: 'Watch Videos',
	href: '/vlogs/',
} as const;

export const faithCommunitySection = {
	title: 'Faith Community Resources',
	subtitle: 'Leadership Resources for Pastors and Churches.',
	intro:
		'Mark’s faith-community resources draw from more than 35 years of pastoral leadership and focus on the unique challenges faced by pastors, staff, and church leadership teams.',
	topics: [
		'Healthy church leadership',
		'Leadership teams',
		'Relationships',
		'Conflict',
		'Emerging leaders',
		'Personal leadership',
		'Spiritual identity',
		'Healthy ministry culture',
	],
	cta: 'Explore Faith Community Resources',
	href: '/faith-community-packages/',
} as const;

export const startWhereYouAre = {
	title: 'Start Where You Are.',
	intro: [
		'You don’t need to use every resource.',
		'You don’t need to have everything figured out.',
		'Just start with the area that speaks to where you are right now.',
	],
	links: [
		{
			question: 'Want to discover your blind spots?',
			cta: 'Take the Assessment',
			href: '/blind-spot-assessment/',
		},
		{
			question: 'Want to strengthen your relationships?',
			cta: 'Explore Relationship Matters',
			href: '/relationship-matters/',
		},
		{
			question: 'Want to develop your leadership?',
			cta: 'Explore Leadership Accelerator',
			href: '/leadership-accelerator/',
		},
		{
			question: 'Want to learn at your own pace?',
			cta: 'Explore Online Courses',
			href: '/online-courses/',
		},
		{
			question: 'Want practical leadership insight?',
			cta: 'Read the Blog',
			href: '/blog/',
		},
	],
} as const;

export const keepGrowing = {
	title: 'Keep Growing.',
	subtitle: 'Healthy Leadership Is a Journey.',
	body:
		'Whether you’re leading an organization, developing a team, pastoring a church, navigating a difficult season, or simply wanting to become a healthier leader, growth begins with the willingness to look, learn, and take the next step.',
	primaryCta: 'Explore the Resources',
	primaryHref: '/resources/#go-deeper',
	secondaryCta: 'Start a Conversation With Mark',
	secondaryHref: '/contact/',
} as const;
