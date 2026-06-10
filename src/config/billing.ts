/** Clerk Billing plan slugs — match course slugs for has({ plan }) checks. */
export const COURSE_PLAN_SLUGS = [
	'relationship-matters',
	'godfidence-building-confidence-that-lasts-forever',
	'understanding-anger',
	'punching-shame-in-the-face',
] as const;

export type CoursePlanSlug = (typeof COURSE_PLAN_SLUGS)[number];

/** Clerk plan IDs (cplan_…) from Dashboard → Billing → Plans. Set in Vercel env. */
export const clerkPlanIds: Record<CoursePlanSlug, string | undefined> = {
	'relationship-matters': import.meta.env.CLERK_PLAN_RELATIONSHIP_MATTERS,
	'godfidence-building-confidence-that-lasts-forever': import.meta.env.CLERK_PLAN_GODFIDENCE,
	'understanding-anger': import.meta.env.CLERK_PLAN_UNDERSTANDING_ANGER,
	'punching-shame-in-the-face': import.meta.env.CLERK_PLAN_PUNCHING_SHAME,
};

export function isCoursePlanSlug(slug: string): slug is CoursePlanSlug {
	return (COURSE_PLAN_SLUGS as readonly string[]).includes(slug);
}

export function getClerkPlanId(courseSlug: string): string | undefined {
	if (!isCoursePlanSlug(courseSlug)) return undefined;
	return clerkPlanIds[courseSlug];
}
