/** Extract a YouTube video ID from common URL formats. */
export function parseYouTubeVideoId(url: string): string | null {
	try {
		const parsed = new URL(url);

		if (parsed.hostname === 'youtu.be') {
			const id = parsed.pathname.slice(1).split('/')[0];
			return id || null;
		}

		if (parsed.hostname.includes('youtube.com')) {
			if (parsed.pathname.startsWith('/embed/')) {
				return parsed.pathname.split('/')[2] ?? null;
			}
			const v = parsed.searchParams.get('v');
			if (v) return v;
		}
	} catch {
		return null;
	}

	return null;
}

export function youTubeThumbnailUrl(videoId: string): string {
	return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}
