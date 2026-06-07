<script lang="ts">
	let {
		videoId,
		title = 'YouTube video',
		posterSrc,
		posterWidth,
		posterHeight,
	}: {
		videoId: string;
		title?: string;
		posterSrc?: string;
		posterWidth?: number;
		posterHeight?: number;
	} = $props();

	let playing = $state(!posterSrc);
</script>

<div class="relative aspect-video w-full overflow-hidden rounded-sm bg-surface-alt">
	{#if playing}
		<iframe
			src="https://www.youtube.com/embed/{videoId}?autoplay=1"
			{title}
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
			referrerpolicy="strict-origin-when-cross-origin"
			class="absolute inset-0 h-full w-full border-0"
		></iframe>
	{:else}
		<button
			type="button"
			class="group absolute inset-0 cursor-pointer border-0 bg-transparent p-0"
			onclick={() => (playing = true)}
			aria-label={`Play video: ${title}`}
		>
			<img
				src={posterSrc}
				alt={title}
				width={posterWidth}
				height={posterHeight}
				class="h-full w-full object-cover"
			/>
			<span
				class="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/40"
				aria-hidden="true"
			></span>
			<span
				class="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand shadow-lg transition-transform group-hover:scale-110"
				aria-hidden="true"
			>
				<svg class="ml-1 h-7 w-7 text-text-inverse" viewBox="0 0 24 24" fill="currentColor">
					<path d="M8 5v14l11-7z" />
				</svg>
			</span>
		</button>
	{/if}
</div>
