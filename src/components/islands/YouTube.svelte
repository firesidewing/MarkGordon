<script lang="ts">
	let { videoId, title = 'YouTube video' }: { videoId: string; title?: string } = $props();
</script>

<div class="aspect-video w-full overflow-hidden rounded-sm bg-surface-alt">
	<iframe
		src="https://www.youtube.com/embed/{videoId}"
		{title}
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		allowfullscreen
		referrerpolicy="strict-origin-when-cross-origin"
		class="h-full w-full border-0"
		loading="lazy"
	></iframe>
</div>
