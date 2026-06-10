/**
 * WordPress export → Astro content collections.
 * Run: bun run migrate
 */
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';

const ROOT = join(import.meta.dir, '..');
const OUTPUT = join(ROOT, 'output');
const EXPORT_XML = join(ROOT, 'export.xml');
const CONTENT_BLOG = join(ROOT, 'src/content/blog');
const CONTENT_PAGES = join(ROOT, 'src/content/pages');
const CONTENT_COURSES = join(ROOT, 'src/content/courses');
const ASSETS_CONTENT = join(ROOT, 'src/assets/content');
const ASSETS_COURSES = join(ROOT, 'src/assets/courses');
const PUBLIC_MATERIALS = join(ROOT, 'public/course-materials');

/** Phase 1 marketing pages — see PROJECT.md */
const PHASE1_PAGE_SLUGS = new Set([
	'home2',
	'about-mark',
	'blog',
	'contact',
	'keynote-speaker',
	'workshop-facilitator',
	'relationship-leadership-coaching',
	'vlogs',
	'relationship-matters',
	'blind-spot-assessment',
	'faith-community-packages',
	'book-now',
	'thank-you',
	'newsletter-signup',
	'products',
]);

type WpItem = {
	postId: number;
	postName: string;
	postType: string;
	status: string;
	title: string;
	meta: Record<string, string>;
};

type CourseBullet = { text: string; highlight?: string };
type CourseDownload = { label: string; url: string };
type CourseLesson = {
	slug: string;
	title: string;
	order: number;
	body: string;
	videoUrls: string[];
	downloads: CourseDownload[];
};
type CourseRecord = {
	slug: string;
	title: string;
	subtitle: string;
	date: string;
	price: number;
	featured: boolean;
	badge?: string;
	accessDays: number;
	coverImage: string;
	description: string;
	bullets: CourseBullet[];
	testimonial?: { quote: string; author: string };
	materials: CourseDownload[];
	lessons: CourseLesson[];
};

type Frontmatter = Record<string, unknown>;

const COURSE_META: Record<string, { featured?: boolean; badge?: string }> = {
	'relationship-matters': { featured: true, badge: 'Popular' },
	'godfidence-building-confidence-that-lasts-forever': { badge: 'Mini-Series' },
};

function extractCdata(block: string, tag: string): string | undefined {
	const match = block.match(new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`));
	return match?.[1]?.trim();
}

function extractTag(block: string, tag: string): string | undefined {
	return extractCdata(block, tag) ?? block.match(new RegExp(`<${tag}>([^<]*)</${tag}>`))?.[1]?.trim();
}

function parseItemMeta(block: string): Record<string, string> {
	const meta: Record<string, string> = {};
	for (const match of block.matchAll(/<wp:meta_key><!\[CDATA\[([\s\S]*?)\]\]><\/wp:meta_key>\s*<wp:meta_value><!\[CDATA\[([\s\S]*?)\]\]><\/wp:meta_value>/g)) {
		meta[match[1]] = match[2];
	}
	return meta;
}

function parseWpItem(block: string): WpItem | undefined {
	const postName = extractTag(block, 'wp:post_name');
	const postType = extractTag(block, 'wp:post_type');
	const postIdRaw = extractTag(block, 'wp:post_id');
	if (!postName || !postType || !postIdRaw) return undefined;
	return {
		postId: Number(postIdRaw),
		postName,
		postType,
		status: extractCdata(block, 'wp:status') ?? '',
		title: extractCdata(block, 'title') ?? postName,
		meta: parseItemMeta(block),
	};
}

/** Slug map for Phase 1 blog/pages only — excludes sfwd-* types that collide with page slugs. */
function parseExportXml(xml: string): Map<string, WpItem> {
	const items = new Map<string, WpItem>();
	for (const block of xml.split('<item>').slice(1)) {
		const item = parseWpItem(block);
		if (!item || (item.postType !== 'post' && item.postType !== 'page')) continue;
		items.set(item.postName, item);
	}
	return items;
}

function parseAllWpItems(xml: string): WpItem[] {
	const items: WpItem[] = [];
	for (const block of xml.split('<item>').slice(1)) {
		const item = parseWpItem(block);
		if (item) items.push(item);
	}
	return items;
}

function wpItemsById(items: WpItem[]): Map<number, WpItem> {
	const byId = new Map<number, WpItem>();
	for (const item of items) byId.set(item.postId, item);
	return byId;
}

function parseSerializedValue(serialized: string, key: string): string | undefined {
	const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const stringMatch = serialized.match(new RegExp(`${escaped}";s:(\\d+):"((?:[^"\\\\]|\\\\.)*)"`));
	if (stringMatch) {
		return stringMatch[2].replace(/\\"/g, '"').replace(/\\\\/g, '\\');
	}
	const intMatch = serialized.match(new RegExp(`${escaped}";s:(\\d+):"(\\d+)"`));
	return intMatch?.[2];
}

function parseLessonOrder(meta: Record<string, string>): number[] {
	const steps = meta.ld_course_steps;
	if (!steps) return [];
	const ids: number[] = [];
	for (const match of steps.matchAll(/i:(\d+);a:2:\{s:10:"sfwd-topic"/g)) {
		ids.push(Number(match[1]));
	}
	return ids;
}

function extractYouTubeUrls(text: string): string[] {
	const urls: string[] = [];
	const patterns = [
		/https?:\/\/(?:www\.)?youtu\.be\/[^\s?]+(?:\?[^\s]*)?/g,
		/https?:\/\/(?:www\.)?youtube\.com\/watch\?v=[^\s&]+/g,
	];
	for (const pattern of patterns) {
		for (const match of text.matchAll(pattern)) {
			const url = match[0].replace(/\\_/g, '_');
			if (!urls.includes(url)) urls.push(url);
		}
	}
	return urls;
}

function extractDownloads(text: string): CourseDownload[] {
	const downloads: CourseDownload[] = [];
	for (const match of text.matchAll(/\[([^\]]+)\]\((https?:\/\/[^)]+\.pdf[^)]*)\)/gi)) {
		downloads.push({ label: match[1], url: match[2] });
	}
	return downloads;
}

function cleanLessonBody(text: string): string {
	return text
		.replace(/<iframe[^>]*>[\s\S]*?<\/iframe>\s*/gi, '')
		.replace(/\[([^\]]+)\]\(https?:\/\/[^)]+\.pdf[^)]*\)\s*/gi, '')
		.replace(/^https?:\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/watch\?v=)[^\s]+\s*$/gm, '')
		.replace(/\*\*([^*]+)\*\*/g, '$1')
		.replace(/^>\s*/gm, '')
		.replace(/_([^_]+)_/g, '$1')
		.split('\n')
		.map((line) => line.trim())
		.filter(Boolean)
		.join('\n\n')
		.trim();
}

function parseBullets(body: string): CourseBullet[] {
	const bullets: CourseBullet[] = [];
	for (const line of body.split('\n')) {
		const trimmed = line.trim();
		if (!trimmed.startsWith('-')) continue;
		const text = trimmed.slice(1).trim().replace(/\s{2,}/g, ' ');
		const highlightMatch = text.match(/\*\*([^*]+)\*\*/);
		if (highlightMatch) {
			bullets.push({
				text: text.replace(/\*\*/g, ''),
				highlight: highlightMatch[1],
			});
		} else {
			bullets.push({ text: text.replace(/\*\*/g, '') });
		}
	}
	return bullets;
}

function parseTestimonial(body: string): { quote: string; author: string } | undefined {
	const quoteMatch = body.match(/>\s*"_?([^"\n]+(?:\n[^"]*)?)"?/);
	const authorMatch = body.match(/Pastor\s+([^\n_>]+)/i) ?? body.match(/>\s*_([^_]+)_/);
	if (!quoteMatch) return undefined;
	return {
		quote: quoteMatch[1].replace(/"/g, '').replace(/_/g, '').trim(),
		author: authorMatch?.[1]?.trim() ?? 'Pastor Rory Franks',
	};
}

function splitTitle(rawTitle: string): { title: string; subtitle: string } {
	if (rawTitle.includes(' - ')) {
		const [title, ...rest] = rawTitle.split(' - ');
		return { title: title.trim(), subtitle: rest.join(' - ').trim() };
	}
	return { title: rawTitle.trim(), subtitle: '' };
}

function localPdfUrl(remoteUrl: string): string {
	return `/course-materials/${basename(remoteUrl.split('?')[0])}`;
}

async function downloadPdf(url: string, dest: string): Promise<boolean> {
	if (existsSync(dest)) return true;
	try {
		const response = await fetch(url);
		if (!response.ok) {
			console.warn(`⚠ Failed to download ${url}: ${response.status}`);
			return false;
		}
		const buffer = await response.arrayBuffer();
		writeFileSync(dest, Buffer.from(buffer));
		return true;
	} catch (error) {
		console.warn(`⚠ Failed to download ${url}:`, error);
		return false;
	}
}

function rewriteDownloadUrl(url: string): string {
	if (url.includes('/wp-content/uploads/') && url.endsWith('.pdf')) {
		return localPdfUrl(url);
	}
	return url;
}

function parseCourseCopy(body: string): { subtitle: string; description: string; bullets: CourseBullet[]; testimonial?: { quote: string; author: string } } {
	const lines = body.split('\n');
	const subtitleLine = lines.find((line) => {
		const trimmed = line.trim();
		return trimmed && !trimmed.startsWith('-') && !trimmed.startsWith('>') && trimmed.length < 120;
	});
	const subtitle = subtitleLine?.replace(/\*\*/g, '').trim() ?? '';
	const bullets = parseBullets(body);
	const testimonial = parseTestimonial(body);

	const paragraphs = body
		.split('\n\n')
		.map((p) => p.trim())
		.filter((p) => p && !p.startsWith('-') && !p.startsWith('>'));

	const description =
		paragraphs.find((p) => p.length > 100) ??
		paragraphs.find((p) => p.length > 60) ??
		subtitle;

	return { subtitle, description: description.replace(/\*\*/g, '').trim(), bullets, testimonial };
}

function copyCourseCover(sourceDir: string, slug: string, coverImage: string): void {
	const src = join(sourceDir, 'images', coverImage);
	if (!existsSync(src)) return;
	const destDir = join(ASSETS_COURSES, slug);
	mkdirSync(destDir, { recursive: true });
	cpSync(src, join(destDir, coverImage));
}

function migrateLesson(
	sourceDir: string,
	slug: string,
	order: number,
	wpItem: WpItem | undefined,
): CourseLesson {
	const raw = readFileSync(join(sourceDir, 'index.md'), 'utf-8');
	const { data, body } = parseFrontmatter(raw);
	const videoUrls = extractYouTubeUrls(body);
	const downloads = extractDownloads(body).map((d) => ({
		label: d.label,
		url: rewriteDownloadUrl(d.url),
	}));

	return {
		slug,
		title: String(data.title ?? wpItem?.title ?? slug),
		order,
		body: cleanLessonBody(body),
		videoUrls,
		downloads,
	};
}

async function migrateCourses(allItems: WpItem[]): Promise<number> {
	const byId = wpItemsById(allItems);
	const coursesBySlug = new Map(
		allItems.filter((item) => item.postType === 'sfwd-courses').map((item) => [item.postName, item]),
	);
	if (existsSync(CONTENT_COURSES)) rmSync(CONTENT_COURSES, { recursive: true });
	if (existsSync(ASSETS_COURSES)) rmSync(ASSETS_COURSES, { recursive: true });
	mkdirSync(CONTENT_COURSES, { recursive: true });
	mkdirSync(PUBLIC_MATERIALS, { recursive: true });

	const pdfSources = new Set<string>();
	let courseCount = 0;

	const coursesDir = join(OUTPUT, 'custom/sfwd-courses');
	for (const folder of readdirSync(coursesDir)) {
		const slug = folderSlug(folder);
		if (!slug) continue;
		const sourceDir = join(coursesDir, folder);
		if (!statSync(sourceDir).isDirectory()) continue;

		const wpCourse = coursesBySlug.get(slug);
		const raw = readFileSync(join(sourceDir, 'index.md'), 'utf-8');
		const { data, body } = parseFrontmatter(raw);
		const serialized = wpCourse?.meta['_sfwd-courses'] ?? '';
		const price = Number(parseSerializedValue(serialized, 'sfwd-courses_course_price') ?? '0');
		const xmlDescription = parseSerializedValue(serialized, 'sfwd-courses_course_short_description');
		const copy = parseCourseCopy(body);
		const titleParts = splitTitle(String(data.title ?? wpCourse?.title ?? slug));
		const coverImage = String(data.coverImage ?? '');
		const lessonIds = parseLessonOrder(wpCourse?.meta ?? {});
		const lessons: CourseLesson[] = [];

		for (const [index, lessonId] of lessonIds.entries()) {
			const lessonItem = byId.get(lessonId);
			if (!lessonItem) continue;
			const lessonFolder = readdirSync(join(OUTPUT, 'custom/sfwd-lessons')).find((f) => folderSlug(f) === lessonItem.postName);
			if (!lessonFolder) continue;
			lessons.push(
				migrateLesson(join(OUTPUT, 'custom/sfwd-lessons', lessonFolder), lessonItem.postName, index + 1, lessonItem),
			);
		}

		const materialsMap = new Map<string, CourseDownload>();
		for (const lesson of lessons) {
			for (const download of lesson.downloads) {
				materialsMap.set(download.url, download);
			}
		}

		if (coverImage) copyCourseCover(sourceDir, slug, coverImage);

		const meta = COURSE_META[slug] ?? {};
		const course: CourseRecord = {
			slug,
			title: titleParts.title,
			subtitle: copy.subtitle || titleParts.subtitle,
			date: String(data.date ?? '2023-01-01').slice(0, 10),
			price,
			featured: meta.featured ?? false,
			badge: meta.badge,
			accessDays: 365,
			coverImage,
			description: xmlDescription ?? copy.description,
			bullets: copy.bullets,
			testimonial: copy.testimonial,
			materials: [...materialsMap.values()],
			lessons,
		};

		writeFileSync(join(CONTENT_COURSES, `${slug}.json`), JSON.stringify(course, null, 2) + '\n');
		courseCount++;
	}

	for (const lessonFolder of readdirSync(join(OUTPUT, 'custom/sfwd-lessons'))) {
		const raw = readFileSync(join(OUTPUT, 'custom/sfwd-lessons', lessonFolder, 'index.md'), 'utf-8');
		for (const download of extractDownloads(raw)) {
			if (download.url.includes('.pdf')) pdfSources.add(download.url);
		}
	}

	const PDF_FALLBACKS: Record<string, string> = {
		'Godfidence_Participant_Workbook-revised-1.pdf':
			'https://www.markgordon.ca/wp-content/uploads/2023/04/Godfidence_Participant_Workbook-revised.pdf',
	};

	let pdfCount = 0;
	for (const url of pdfSources) {
		const filename = basename(url.split('?')[0]);
		const dest = join(PUBLIC_MATERIALS, filename);
		let ok = await downloadPdf(url, dest);
		if (!ok && PDF_FALLBACKS[filename]) {
			ok = await downloadPdf(PDF_FALLBACKS[filename], dest);
		}
		if (ok) pdfCount++;
	}

	console.log(`Migrated ${courseCount} courses → src/content/courses/`);
	console.log(`Copied course covers → src/assets/courses/`);
	console.log(`Downloaded ${pdfCount} PDFs → public/course-materials/`);

	if (courseCount !== 4) {
		console.warn(`⚠ Expected 4 courses, got ${courseCount}`);
	}

	return courseCount;
}

function folderSlug(folderName: string): string | null {
	const match = folderName.match(/^\d{4}-\d{2}-\d{2}-(.+)$/);
	return match?.[1] ?? null;
}

function parseFrontmatter(raw: string): { data: Frontmatter; body: string } {
	const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
	if (!match) return { data: {}, body: raw };

	const data: Frontmatter = {};
	const yaml = match[1];
	let currentKey: string | null = null;
	let listValues: string[] | null = null;

	for (const line of yaml.split('\n')) {
		const keyMatch = line.match(/^(\w+):\s*(.*)$/);
		if (keyMatch) {
			if (currentKey && listValues) {
				data[currentKey] = listValues;
				listValues = null;
			}
			currentKey = keyMatch[1];
			const value = keyMatch[2].trim();
			if (value === '') {
				listValues = [];
			} else if (value.startsWith('"') && value.endsWith('"')) {
				data[currentKey] = value.slice(1, -1);
				currentKey = null;
			} else {
				data[currentKey] = value;
				currentKey = null;
			}
			continue;
		}

		const listMatch = line.match(/^\s+-\s+"(.*)"\s*$/);
		if (listMatch && listValues) {
			listValues.push(listMatch[1]);
		}
	}

	if (currentKey && listValues) {
		data[currentKey] = listValues;
	}

	return { data, body: match[2] };
}

function serializeValue(value: unknown, indent = 0): string {
	const pad = ' '.repeat(indent);
	if (Array.isArray(value)) {
		return value.map((v) => `${pad}  - "${String(v)}"`).join('\n');
	}
	if (typeof value === 'boolean') return String(value);
	if (value instanceof Date) return value.toISOString().slice(0, 10);
	if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
	return `"${String(value).replace(/"/g, '\\"')}"`;
}

function serializeFrontmatter(data: Frontmatter): string {
	const order = ['title', 'slug', 'date', 'draft', 'homepage', 'categories', 'tags', 'videoId', 'excerpt'];
	const keys = [...order.filter((k) => k in data), ...Object.keys(data).filter((k) => !order.includes(k))];
	const lines = keys.flatMap((key) => {
		const value = data[key];
		if (value === undefined) return [];
		if (Array.isArray(value)) {
			return [`${key}:`, serializeValue(value, 0)];
		}
		return [`${key}: ${serializeValue(value)}`];
	});
	return `---\n${lines.join('\n')}\n---\n`;
}

function extractYouTubeId(text: string): string | null {
	const patterns = [
		/youtube\.com\/embed\/([a-zA-Z0-9_-]+)/,
		/youtu\.be\/([a-zA-Z0-9_-]+)/,
		/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/,
	];
	for (const pattern of patterns) {
		const match = text.match(pattern);
		if (match) return match[1];
	}
	return null;
}

function processBody(body: string, slug: string): { body: string; videoId?: string; excerpt?: string } {
	let videoId: string | undefined;
	let excerpt: string | undefined;
	let processed = body;

	// Extract video ID from iframes, then remove them
	processed = processed.replace(/<iframe[^>]*>[\s\S]*?<\/iframe>\s*/gi, (match) => {
		videoId ??= extractYouTubeId(match) ?? undefined;
		return '';
	});

	// Bare youtu.be / youtube URLs on their own line
	processed = processed.replace(/^https?:\/\/(?:www\.)?(?:youtu\.be\/|youtube\.com\/watch\?v=)([a-zA-Z0-9_-]+)\s*$/gm, (match) => {
		videoId ??= extractYouTubeId(match) ?? undefined;
		return '';
	});

	// <!--more--> → excerpt split
	const moreIndex = processed.indexOf('<!--more-->');
	if (moreIndex !== -1) {
		const before = processed.slice(0, moreIndex).trim();
		excerpt = before.split('\n').filter((l) => l.trim() && !l.startsWith('<iframe')).join(' ').trim();
		processed = processed.slice(0, moreIndex) + processed.slice(moreIndex + '<!--more-->'.length);
	}

	// Rewrite image paths
	const assetPrefix = `../../assets/content/${slug}`;
	processed = processed.replace(/!\[([^\]]*)\]\(images\/([^)]+)\)/g, `![$1](${assetPrefix}/$2)`);
	processed = processed.replace(/!\[([^\]]*)\]\(\.\/images\/([^)]+)\)/g, `![$1](${assetPrefix}/$2)`);

	return { body: processed.trim() + '\n', videoId, excerpt };
}

function copyImages(sourceDir: string, slug: string): number {
	const imagesDir = join(sourceDir, 'images');
	if (!existsSync(imagesDir)) return 0;

	const destDir = join(ASSETS_CONTENT, slug);
	mkdirSync(destDir, { recursive: true });

	let count = 0;
	for (const entry of readdirSync(imagesDir)) {
		const src = join(imagesDir, entry);
		if (!statSync(src).isFile()) continue;
		cpSync(src, join(destDir, entry));
		count++;
	}
	return count;
}

function migrateEntry(
	sourceDir: string,
	slug: string,
	collection: 'blog' | 'pages',
	wpItem: WpItem | undefined,
): void {
	const sourceFile = join(sourceDir, 'index.md');
	const raw = readFileSync(sourceFile, 'utf-8');
	const { data, body } = parseFrontmatter(raw);
	const { body: processedBody, videoId, excerpt } = processBody(body, slug);

	const frontmatter: Frontmatter = {
		...data,
		title: data.title ?? wpItem?.title ?? slug,
		slug,
		draft: false,
	};

	if (collection === 'pages' && slug === 'home2') {
		frontmatter.homepage = true;
	}

	if (videoId) frontmatter.videoId = videoId;
	if (excerpt) frontmatter.excerpt = excerpt;

	const destDir = collection === 'blog' ? CONTENT_BLOG : CONTENT_PAGES;
	mkdirSync(destDir, { recursive: true });
	writeFileSync(join(destDir, `${slug}.md`), serializeFrontmatter(frontmatter) + '\n' + processedBody);
}

function cleanOutputDirs(): void {
	for (const dir of [CONTENT_BLOG, CONTENT_PAGES, ASSETS_CONTENT]) {
		if (existsSync(dir)) rmSync(dir, { recursive: true });
	}
}

async function main(): Promise<void> {
	console.log('Parsing export.xml…');
	const xml = readFileSync(EXPORT_XML, 'utf-8');
	const wpItems = parseExportXml(xml);
	const allWpItems = parseAllWpItems(xml);

	cleanOutputDirs();

	let postCount = 0;
	let pageCount = 0;
	let imageCount = 0;

	const postsDir = join(OUTPUT, 'posts');
	for (const folder of readdirSync(postsDir)) {
		const slug = folderSlug(folder);
		if (!slug) continue;
		const sourceDir = join(postsDir, folder);
		if (!statSync(sourceDir).isDirectory()) continue;

		migrateEntry(sourceDir, slug, 'blog', wpItems.get(slug));
		imageCount += copyImages(sourceDir, slug);
		postCount++;
	}

	const pagesDir = join(OUTPUT, 'pages');
	for (const folder of readdirSync(pagesDir)) {
		if (folder === '_drafts') continue;
		const slug = folderSlug(folder);
		if (!slug || !PHASE1_PAGE_SLUGS.has(slug)) continue;

		const sourceDir = join(pagesDir, folder);
		if (!statSync(sourceDir).isDirectory()) continue;

		migrateEntry(sourceDir, slug, 'pages', wpItems.get(slug));
		imageCount += copyImages(sourceDir, slug);
		pageCount++;
	}

	console.log(`Migrated ${postCount} posts → src/content/blog/`);
	console.log(`Migrated ${pageCount} pages → src/content/pages/`);
	console.log(`Copied ${imageCount} images → src/assets/content/`);

	if (postCount !== 25) {
		console.warn(`⚠ Expected 25 posts, got ${postCount}`);
	}
	if (pageCount !== 15) {
		console.warn(`⚠ Expected 15 pages, got ${pageCount}`);
	}

	await migrateCourses(allWpItems);
}

main();
