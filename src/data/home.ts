import coachingImg from "@/assets/content/home2/Mark-47.jpg";
import coursesBanner from "@/assets/content/home2/Untitled-design-2.png";
import keynoteImg from "@/assets/content/home2/tsg-9.jpg";
import podcastImg from "@/assets/content/home2/Podcast-1-1024x731.png";
import videoCover from "@/assets/content/home2/Relationship-Matters-video-cover.png";
import bookImg from "@/assets/content/home2/Untitled-design-2.png";

export const homeHero = {
    title: "Healthy Leaders Build Healthy Cultures.",
    intro:
        "Mark Gordon equips leaders and organizations to build trust, strengthen relationships, and create cultures where people can thrive.",
    experience:
        "With more than 35 years of leadership experience, Mark brings practical insight, engaging storytelling, and immediately usable tools to conferences, organizations, leadership teams, nonprofits, and faith communities.",
    credibility:
        "Keynote Speaker · Leadership Facilitator · Executive Coach · Author",
    primaryCta: "Book Mark to Speak",
    secondaryCta: "Explore Speaking Topics",
} as const;

export const homeChallenge = {
    title: "Leadership Isn't Just About Strategy. It's About People.",
    tensions: [
        "Communication breaks down.",
        "Trust gets damaged.",
        "Conflict goes unresolved.",
        "Leaders become overwhelmed.",
        "Teams lose connection.",
    ],
    body: "And what began as a people problem becomes a performance problem. The healthiest organizations develop leaders who know how to address what is happening beneath the surface.",
    payoff:
        "Mark helps leaders understand what is happening beneath the surface—then gives them practical tools to lead with greater clarity, confidence, trust, and connection.",
    cta: "Bring Mark to Your Team",
} as const;

export const homeOfferings = {
    title: "Practical Leadership. Real Relationships. Lasting Impact.",
    intro:
        "Mark doesn't believe leadership development should stay in the classroom. His approach is practical, relational, and immediately applicable.",
    items: [
        {
            id: "keynotes",
            title: "Keynotes",
            tagline: "Ideas That Challenge. Stories That Connect. Tools People Can Use.",
            description:
                "Mark's keynote talks combine engaging storytelling, leadership insight, and practical application. Designed for conferences, organizations, leadership teams, nonprofits, and faith communities.",
            cta: "View Speaking Topics",
            href: "/keynote-speaker/",
        },
        {
            id: "workshops",
            title: "Workshops & Leadership Development",
            tagline: "Move From Inspiration to Transformation.",
            description:
                "Mark's workshops take important leadership and relational issues deeper. Participants don't just hear ideas—they work with practical tools they can begin using immediately.",
            highlights: [
                "Hands-on frameworks leaders can apply the same week",
                "Facilitation for teams navigating culture and conflict",
                "Sessions built for lasting change, not applause",
            ],
            cta: "Explore Workshops",
            href: "/workshop-facilitator/",
        },
        {
            id: "coaching",
            title: "Coaching",
            tagline: "Leadership Gets Personal.",
            description:
                "For leaders who want to go deeper, Mark provides practical, relational leadership coaching focused on the real issues leaders face.",
            cta: "Explore Leadership Coaching",
            href: "/relationship-leadership-coaching/",
            image: coachingImg,
        },
    ],
} as const;

export const homeSpeakingTopics = {
    title: "Mark Doesn't Just Speak About Leadership. He Speaks Into It.",
    intro:
        "The hardest leadership issues are often the ones people don't know how to talk about. Mark brings those conversations into the room. His sessions address the places where leadership, relationships, identity, communication, and culture intersect.",
    topics: [
        {
            title: "Healthy Leadership Starts With Healthy Relationships",
            description:
                "Leadership is ultimately about people. Learn how trust, communication, authenticity, honesty, and honour shape the culture you lead.",
        },
        {
            title: "The Leadership Blind Spot",
            description:
                "Every leader has blind spots. The question isn't whether you have them—it's whether you're willing to see them.",
        },
        {
            title: "Living From Identity",
            description:
                "Confident leadership begins with knowing who you are. Explore identity, shame, confidence, and the internal patterns that shape how leaders show up.",
        },
    ],
    cta: "See All Speaking Topics",
    href: "/keynote-speaker/",
} as const;

export const homeWhyMark = {
    title: "Leadership Experience You Can Hear in the Message.",
    paragraphs: [
        "Mark Gordon has spent more than 35 years leading people, navigating difficult relationships, developing leaders, speaking to groups, and learning what happens when leadership gets personal.",
        "After more than three decades in pastoral leadership, Mark transitioned into leadership coaching, training, and speaking—bringing together decades of real-world experience with practical tools leaders can use today.",
        "He is the author of Relationship Matters and the creator of leadership and relational development programs designed to help leaders and organizations become healthier from the inside out.",
    ],
    emphasis: "Mark doesn't speak from theory alone. He speaks from experience.",
    cta: "Meet Mark",
    href: "/about-mark/",
} as const;

export const homeGoDeeper = {
    coaching: {
        title: "Sometimes the Keynote Starts the Conversation.",
        subtitle: "Coaching Helps Continue It.",
        description:
            "For leaders who want to go deeper, Mark provides practical, relational leadership coaching focused on the real issues leaders face.",
        cta: "Explore Leadership Coaching",
        href: "/relationship-leadership-coaching/",
    },
    relationshipMatters: {
        title: "Relationship Matters.",
        subtitle: "Because Leadership Is Always Relational.",
        description:
            "Mark's book and signature framework explores five foundational principles for building healthy relationships. These principles continue to influence Mark's speaking, workshops, leadership development, and coaching.",
        pillars: ["Trust", "Communication", "Authenticity", "Honesty", "Honour"],
        cta: "Explore Relationship Matters",
        href: "/relationship-matters/",
        image: bookImg,
    },
} as const;

export const homeBlindSpot = {
    title: "Every Leader Has Blind Spots.",
    subtitle: "The question is whether yours are costing you.",
    description:
        "Take the free Blind Spot Assessment and discover areas that may be affecting your leadership, relationships, and effectiveness.",
    cta: "Take the Free Assessment",
    href: "/blind-spot-assessment/",
} as const;

export const homeNewsletter = {
    title: "Get Practical Leadership Insights.",
    description:
        "Short, useful insights from Mark Gordon on leadership, relationships, culture, and personal growth.",
    cta: "Join the Leadership Conversation",
} as const;

export const homeFinalCta = {
    title: "Ready to Invest in Your Leaders?",
    description:
        "Whether you're planning a conference, developing your leadership team, or looking for a speaker who can bring practical insight to difficult leadership issues, let's talk.",
    primaryCta: "Book Mark to Speak",
    secondaryCta: "Start a Conversation",
    secondaryHref: "/contact/",
} as const;

// Legacy exports — used by inner pages
export const homeQuote = {
    text: "I am passionate about you enjoying healthy and trusting relationships.",
    body: "Today is filled with damaged relationships both personally and professionally, this epidemic continues to destroy families and erode the personal value people need to experience a flourishing life. For healthy relationships to happen, people need to heal from the inside out.",
    emphasis: "That's where I come in!",
    mission:
        "I coach individuals, couples, and teams through a process that teaches the principles and tools needed for lasting change. My mission is simple: help people develop healthy relationships.",
};

export const homeResults = [
    "Happy and healthy relationships at home and at work",
    "A flourishing environment people want to be a part of",
    "More productive life at home and at work, with a lot less stress",
    "Live with confidence and authentic connections",
    "People who treat each other with kindness and respect",
];

export const featuredCourses = [
    {
        title: "Relationship Matters",
        subtitle:
            "5 Pillars for a Healthy Foundation in ALL Your Relationships",
        price: "$79",
        badge: "Popular",
        bullets: [
            { text: "How to build trust equity", highlight: "trust" },
            {
                text: "How to have healthy communication",
                highlight: "communication",
            },
            { text: "How to live authentically", highlight: "authentically" },
            { text: "How honesty is a superpower", highlight: "honesty" },
            {
                text: "How to reclaim the lost art of honour",
                highlight: "honour",
            },
        ],
        description:
            "This course has been life changing for the people who have taken it in person and now for the first time it is available in video so you can take your family, small group or organization on the journey to healthy relationships together.",
        href: "/courses/relationship-matters/",
        ctaLabel: "Explore Relationship Matters",
    },
    {
        title: "Godfidence",
        subtitle: "Building Confidence That Lasts Forever",
        price: "$29",
        badge: "Mini-Series",
        bullets: [
            { text: "Where confidence comes from", highlight: "confidence" },
            {
                text: "How faith can change the way you see yourself",
                highlight: "faith",
            },
            {
                text: "How shame destroys identity and erodes confidence",
                highlight: "shame",
            },
            {
                text: "How to build confidence that lasts forever!",
                highlight: "build",
            },
        ],
        description:
            "In this course, I take you on that journey of discovery. We will explore where your value comes from, and who determines it. We will also look at how shame affects your identity and ultimately your confidence negatively. I will provide you with tools to build confidence that lasts forever.",
        href: "/courses/godfidence-building-confidence-that-lasts-forever/",
        ctaLabel: "Explore Godfidence",
    },
];

export const miniCourses = [
    {
        title: "Understanding Anger",
        question: "Are you tired of being angry all the time?",
        body: "Anger can cause a lot of damage in your relationships, in fact many people who experience anger; face lost relationships, lost jobs and careers and at times, lost freedom because they even get in trouble with authorities. There is nothing wrong with anger itself, in fact it is an early warning system that lets you know trouble is ahead or that your needs are not being met. It is what you do with anger that makes it good or bad. When anger manages you rather than you managing it, it becomes destructive. In this two part video series, about 3 hours of training, I take you through the cause and effect of anger. Why you struggle with it and how to manage it and even turn it into an advantage for you. This short course has been an awakening for many people I have taught it too. Now it is available by video in the privacy of your own home.",
        href: "/courses/understanding-anger/",
    },
    {
        title: "Punching Shame in the Face",
        question: "Has shame kept you from being content in life?",
        body: "For many people shame is a pervasive force that destroys self-worth and overrides or overshadows happiness and contentment. It sabotages relationships and undermines your ability to believe in yourself or others. Shame starts from a very young age and sets out to destroy your identity and confidence. Like any bully it needs to be stood up too. In this two video series (About 3 hours of training) I go deep into the cause of shame and how to overcome it and keep it out of your life forever. There are practical tools to give you the skills to punch it right in the face. This is an emotional journey for those who have taken this course but I have been told over and over it is life changing. It is now available in video format so you can watch it in the privacy of your own home.",
        href: "/courses/punching-shame-in-the-face/",
    },
];

export const homeFeatures = [
    {
        title: "Relationship Matters Book",
        subtitle:
            "The Essential Blueprint to Building Strong Families & Fostering Healthy Relationships",
        description:
            "Are you at a loss to understand how your marriage has become so miserable, or do you wonder why your children are completely out of control? Relationship Matters is designed to help you and your family figure out what went wrong and to help create a healthy relational culture at home.",
        image: bookImg,
        containedImage: true,
        ctas: [{ label: "Get The Book", href: "/relationship-matters/" }],
    },
    {
        title: "Keynote Speaker",
        subtitle: "Practical Talks Delivered with Passion",
        description:
            "Whether speaking in the faith community or a business, recovery agency or a non-profit or a leadership team, my goal is to be engaging and to always leave people with inspiration and practical life applications. My topics are relevant and grounded in real relationship challenges.",
        image: keynoteImg,
        ctas: [
            {
                label: "Book a Keynote Call",
                href: "https://meetings.hubspot.com/rmarkgordon/15-min-discovery-meeting",
                external: true,
            },
            { label: "View Keynote Topics", href: "/keynote-speaker/" },
        ],
    },
    {
        title: "Relationship & Leadership Coaching",
        description:
            "If you find your family or organization in a relational crisis, I will help you get to the root of the issue so healing can begin. Then I will walk with you in the journey to wholeness in your relationship. I encourage you to invest in learning the skills to improve your personal or professional relationships.",
        image: coachingImg,
        ctas: [
            {
                label: "Book a Coaching Call",
                href: "https://meetings.hubspot.com/rmarkgordon/15-min-discovery-meeting",
                external: true,
            },
            {
                label: "View Coaching Services",
                href: "/relationship-leadership-coaching/",
            },
        ],
    },
];

export const homeAssets = { coursesBanner, podcastImg, videoCover };
