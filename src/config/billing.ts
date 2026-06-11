/** Billable course slugs — must match Astro content collection ids. */
export const BILLABLE_COURSE_SLUGS = [
	'relationship-matters',
	'godfidence-building-confidence-that-lasts-forever',
	'understanding-anger',
	'punching-shame-in-the-face',
] as const;

export type BillableCourseSlug = (typeof BILLABLE_COURSE_SLUGS)[number];

/**
 * Course slug → Clerk plan ID (cplan_…).
 * Clerk plan slugs are arbitrary (underscores, etc.) — integration uses IDs only.
 */
const clerkPlanIds: Record<BillableCourseSlug, string | undefined> = {
	'relationship-matters': import.meta.env.CLERK_PLAN_RELATIONSHIP_MATTERS,
	'godfidence-building-confidence-that-lasts-forever': import.meta.env.CLERK_PLAN_GODFIDENCE,
	'understanding-anger': import.meta.env.CLERK_PLAN_UNDERSTANDING_ANGER,
	'punching-shame-in-the-face': import.meta.env.CLERK_PLAN_PUNCHING_SHAME,
};

const courseSlugByPlanId = new Map<string, BillableCourseSlug>(
	BILLABLE_COURSE_SLUGS.flatMap((slug) => {
		const planId = clerkPlanIds[slug];
		return planId ? ([[planId, slug]] as const) : [];
	}),
);

export function isBillableCourse(slug: string): slug is BillableCourseSlug {
	return (BILLABLE_COURSE_SLUGS as readonly string[]).includes(slug);
}

export function getClerkPlanId(courseSlug: string): string | undefined {
	if (!isBillableCourse(courseSlug)) return undefined;
	return clerkPlanIds[courseSlug];
}

export function getCourseSlugForPlanId(planId: string | null | undefined): BillableCourseSlug | null {
	if (!planId) return null;
	return courseSlugByPlanId.get(planId) ?? null;
}

/** Resolve a course from a Clerk plan or subscription-item plan_id (ID only). */
export function getCourseSlugForPlan(
	plan: { id?: string | null } | null | undefined,
	planId?: string | null,
): BillableCourseSlug | null {
	return getCourseSlugForPlanId(plan?.id ?? planId ?? null);
}
