<script lang="ts">
	let {
		videoId,
		title = 'YouTube video',
		posterSrc,
		posterWidth,
		posterHeight,
		layout = 'default',
		posterPosition = 'center',
		playStyle = 'default',
	}: {
		videoId: string;
		title?: string;
		posterSrc?: string;
		posterWidth?: number;
		posterHeight?: number;
		layout?: 'default' | 'fill';
		posterPosition?: string;
		playStyle?: 'default' | 'hero';
	} = $props();

	let playing = $state(false);
</script>

<div
	class="video-frame relative w-full overflow-hidden {layout === 'fill'
		? 'video-frame--fill h-full min-h-[inherit]'
		: 'aspect-video rounded-sm bg-surface-alt'}"
>
	{#if playing || !posterSrc}
		<iframe
			src="https://www.youtube.com/embed/{videoId}{playing ? '?autoplay=1' : ''}"
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
				class="poster-image h-full w-full object-cover"
				style:object-position={posterPosition}
			/>
			<span
				class="video-scrim absolute inset-0 transition-colors motion-reduce:transition-none {playStyle === 'hero'
					? 'video-scrim--hero'
					: 'bg-black/25 group-hover:bg-black/40'}"
				aria-hidden="true"
			></span>
			{#if playStyle === 'hero'}
				<span class="play-control play-control--hero" aria-hidden="true">
					<svg class="play-control__ring" viewBox="0 0 40 40" fill="none">
						<circle cx="20" cy="20" r="18.5" stroke="currentColor" stroke-width="1.5" />
						<path d="M16 13v14l12-7-12-7z" fill="currentColor" />
					</svg>
					<span class="play-control__label">Watch intro</span>
				</span>
			{:else}
				<span
					class="play-control play-control--default absolute flex h-16 w-16 items-center justify-center rounded-full bg-brand shadow-lg transition-transform motion-reduce:transition-none"
					aria-hidden="true"
				>
					<svg class="ml-1 h-7 w-7 text-text-inverse" viewBox="0 0 24 24" fill="currentColor">
						<path d="M8 5v14l11-7z" />
					</svg>
				</span>
			{/if}
		</button>
	{/if}
</div>

<style>
	.video-frame--fill {
		background-color: var(--color-card-dark);
		border-radius: 0;
	}

	.video-frame--fill .poster-image {
		display: block;
	}

	.video-scrim--hero {
		background-color: rgb(0 0 0 / 0.12);
	}

	:global(button.group:hover) .video-scrim--hero {
		background-color: rgb(0 0 0 / 0.32);
	}

	.play-control--default {
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	:global(button.group:hover) .play-control--default {
		transform: translate(-50%, -50%) scale(1.1);
	}

	.play-control--hero {
		position: absolute;
		left: 1.25rem;
		bottom: 1.25rem;
		display: inline-flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.5rem 1rem 0.5rem 0.625rem;
		border-radius: 999px;
		background-color: rgb(0 0 0 / 0.42);
		color: var(--color-text-inverse);
		opacity: 0.92;
		transition:
			opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1),
			background-color 0.35s cubic-bezier(0.16, 1, 0.3, 1);
	}

	:global(button.group:hover) .play-control--hero {
		opacity: 1;
		background-color: rgb(0 0 0 / 0.58);
	}

	.play-control__ring {
		width: 2.25rem;
		height: 2.25rem;
		flex-shrink: 0;
	}

	.play-control__label {
		font-family: var(--font-display);
		font-size: 0.75rem;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	@media (prefers-reduced-motion: reduce) {
		:global(button.group:hover) .play-control--default {
			transform: translate(-50%, -50%);
		}
	}
</style>
