/**
 * WordPress export → Astro content collections.
 * Run: bun run migrate
 */
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(import.meta.dir, '..');
const OUTPUT = join(ROOT, 'output');
const EXPORT_XML = join(ROOT, 'export.xml');
const CONTENT_BLOG = join(ROOT, 'src/content/blog');
const CONTENT_PAGES = join(ROOT, 'src/content/pages');
const ASSETS_CONTENT = join(ROOT, 'src/assets/content');

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
	postName: string;
	postType: string;
	status: string;
	title: string;
};

type Frontmatter = Record<string, unknown>;

function extractCdata(block: string, tag: string): string | undefined {
	const match = block.match(new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`));
	return match?.[1]?.trim();
}

function parseExportXml(xml: string): Map<string, WpItem> {
	const items = new Map<string, WpItem>();
	for (const block of xml.split('<item>').slice(1)) {
		const postName = extractCdata(block, 'wp:post_name');
		const postType = extractCdata(block, 'wp:post_type');
		if (!postName || !postType) continue;
		items.set(postName, {
			postName,
			postType,
			status: extractCdata(block, 'wp:status') ?? '',
			title: extractCdata(block, 'title') ?? postName,
		});
	}
	return items;
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

function main(): void {
	console.log('Parsing export.xml…');
	const wpItems = parseExportXml(readFileSync(EXPORT_XML, 'utf-8'));

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
}

main();
