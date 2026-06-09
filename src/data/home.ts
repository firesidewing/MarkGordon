import bookImg from "@/assets/content/home2/Untitled-design-2.png";
import coachingImg from "@/assets/content/home2/Mark-47.jpg";
import coursesBanner from "@/assets/content/home2/Untitled-design-2.png";
import keynoteImg from "@/assets/content/home2/tsg-9.jpg";
import podcastImg from "@/assets/content/home2/Podcast-1-1024x731.png";
import videoCover from "@/assets/content/home2/Relationship-Matters-video-cover.png";

export const homeVideoId = "J0flKmjl8Qw";

export const homeHero = {
    title: "Build Stronger Relationships",
    intro: "Relationships are under pressure at home and at work. I teach practical skills through courses, coaching, and content you can put to use starting today.",
};

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
        href: "/online-courses/",
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
        href: "/online-courses/",
        ctaLabel: "Explore Godfidence",
    },
];

export const miniCourses = [
    {
        title: "Understanding Anger",
        question: "Are you tired of being angry all the time?",
        body: "Anger can cause a lot of damage in your relationships, in fact many people who experience anger; face lost relationships, lost jobs and careers and at times, lost freedom because they even get in trouble with authorities. There is nothing wrong with anger itself, in fact it is an early warning system that lets you know trouble is ahead or that your needs are not being met. It is what you do with anger that makes it good or bad. When anger manages you rather than you managing it, it becomes destructive. In this two part video series, about 3 hours of training, I take you through the cause and effect of anger. Why you struggle with it and how to manage it and even turn it into an advantage for you. This short course has been an awakening for many people I have taught it too. Now it is available by video in the privacy of your own home.",
        href: "/online-courses/",
    },
    {
        title: "Punching Shame in the Face",
        question: "Has shame kept you from being content in life?",
        body: "For many people shame is a pervasive force that destroys self-worth and overrides or overshadows happiness and contentment. It sabotages relationships and undermines your ability to believe in yourself or others. Shame starts from a very young age and sets out to destroy your identity and confidence. Like any bully it needs to be stood up too. In this two video series (About 3 hours of training) I go deep into the cause of shame and how to overcome it and keep it out of your life forever. There are practical tools to give you the skills to punch it right in the face. This is an emotional journey for those who have taken this course but I have been told over and over it is life changing. It is now available in video format so you can watch it in the privacy of your own home.",
        href: "/online-courses/",
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
