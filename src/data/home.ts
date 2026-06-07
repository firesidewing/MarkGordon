import bookImg from '@/assets/content/home2/tsg-9.jpg';
import coachingImg from '@/assets/content/home2/Mark-47.jpg';
import courseRmImg from '@/assets/content/home2/Relationship-Matters-video-cover.png';
import coursesBanner from '@/assets/content/home2/Untitled-design-2.png';
import keynoteImg from '@/assets/content/home2/Mark-47.jpg';
import podcastImg from '@/assets/content/home2/Podcast-1-1024x731.png';

export const homeVideoId = 'J0flKmjl8Qw';

export const homeHero = {
	title: 'Empowering All Your Relationships',
	intro:
		'Relationships are in crisis — I love to empower people in developing healthy relationships through transformational courses and content that gives you the tools needed to succeed.',
};

export const homeQuote = {
	text: 'I am passionate about you enjoying healthy and trusting relationships.',
	body: 'Today is filled with damaged relationships both personally and professionally. For healthy relationships to happen, people need to heal from the inside out.',
	emphasis: "That's where I come in!",
	mission:
		'I am committed to empowering all your relationships through coaching and teaching principles with the tools that provide skills needed for success.',
};

export const homeResults = [
	'Happy and healthy relationships at home and at work',
	'A flourishing environment people want to be a part of',
	'More productive life at home and at work, with a lot less stress',
	'Live with confidence and authentic connections',
	'People who treat each other with kindness and respect',
];

export const featuredCourses = [
	{
		title: 'Relationship Matters',
		subtitle: '5 Pillars for a Healthy Foundation in ALL Your Relationships',
		price: '$79',
		badge: 'Popular',
		image: courseRmImg,
		bullets: ['trust equity', 'healthy communication', 'living authentically', 'honesty', 'honour'],
		description:
			'Based on my groundbreaking book, this course is a powerful journey to relational healing — now available in video.',
		href: '/online-courses/',
	},
	{
		title: 'Godfidence',
		subtitle: 'Building Confidence That Lasts Forever',
		price: '$29',
		badge: 'Mini-Series',
		bullets: ['where confidence comes from', 'how faith changes self-perception', 'overcoming shame', 'building lasting confidence'],
		description:
			'Explore where your value comes from and get tools to build confidence that lasts forever.',
		href: '/online-courses/',
	},
];

export const miniCourses = [
	{
		title: 'Understanding Anger',
		question: 'Are you tired of being angry all the time?',
		description:
			'A two-part video series (~3 hours) on the cause and effect of anger and how to manage it constructively.',
		href: '/online-courses/',
	},
	{
		title: 'Punching Shame in the Face',
		question: 'Has shame kept you from being content in life?',
		description:
			'A two-part video series (~3 hours) on overcoming shame with practical tools to reclaim your identity.',
		href: '/online-courses/',
	},
];

export const homeFeatures = [
	{
		title: 'Relationship Matters Book',
		subtitle: 'The Essential Blueprint to Building Strong Families & Fostering Healthy Relationships',
		description:
			'Designed to help you and your family figure out what went wrong and create a healthy relational culture at home.',
		image: bookImg,
		ctas: [
			{ label: 'Get The Book', href: '/relationship-matters/' },
		],
	},
	{
		title: 'Keynote Speaker',
		subtitle: 'Empowering Content Delivered with Passion and Practical Application',
		description:
			'Engaging keynotes that leave people with inspiration and practical life applications for any audience.',
		image: keynoteImg,
		ctas: [
			{ label: 'Learn More', href: '/keynote-speaker/' },
			{ label: 'Book Discovery Call', href: 'https://meetings.hubspot.com/rmarkgordon/15-min-discovery-meeting', external: true },
		],
	},
	{
		title: 'Relationship & Leadership Coaching',
		subtitle: 'Walk with you in the journey to wholeness',
		description:
			'If your family or organization is in relational crisis, I will help you get to the root so healing can begin.',
		image: coachingImg,
		ctas: [
			{ label: 'Learn More', href: '/relationship-leadership-coaching/' },
			{ label: 'Book Discovery Call', href: 'https://meetings.hubspot.com/rmarkgordon/15-min-discovery-meeting', external: true },
		],
	},
];

export const homeAssets = { coursesBanner, podcastImg };
