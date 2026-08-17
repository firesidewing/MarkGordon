<script lang="ts">
	type Testimonial = {
		quote: string;
		author: string;
		role?: string;
	};

	let { testimonials }: { testimonials: Testimonial[] } = $props();

	let index = $state(0);
	const total = $derived(testimonials.length);
	const current = $derived(testimonials[index]);

	function goTo(next: number) {
		index = (next + total) % total;
	}
</script>

<div class="relative mx-auto max-w-3xl">
	<figure class="min-h-[12rem] text-center">
		<blockquote class="text-lg italic leading-relaxed text-quote sm:text-xl" aria-live="polite">
			<p>&ldquo;{current.quote}&rdquo;</p>
		</blockquote>
		<figcaption class="mt-6">
			<cite class="not-italic font-semibold text-text-heading">— {current.author}</cite>
			{#if current.role}
				<p class="mt-1 text-sm text-text-muted">{current.role}</p>
			{/if}
		</figcaption>
	</figure>

	{#if total > 1}
		<div class="mt-8 flex items-center justify-center gap-2 sm:gap-4">
			<button
				type="button"
				class="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-brand px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-text-inverse motion-reduce:transition-none"
				aria-label="Previous testimonial"
				onclick={() => goTo(index - 1)}
			>
				<span class="hidden sm:inline">Previous</span>
				<span class="sm:hidden" aria-hidden="true">‹</span>
			</button>

			<div class="flex gap-1" role="tablist" aria-label="Testimonials">
				{#each testimonials as _, i (i)}
					<button
						type="button"
						role="tab"
						class="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full transition-colors motion-reduce:transition-none"
						aria-label="Go to testimonial {i + 1}"
						aria-selected={i === index}
						onclick={() => goTo(i)}
					>
						<span
							class="h-2.5 w-2.5 rounded-full {i === index ? 'bg-brand' : 'bg-brand/25 hover:bg-brand/40'}"
							aria-hidden="true"
						></span>
					</button>
				{/each}
			</div>

			<button
				type="button"
				class="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-brand px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-text-inverse motion-reduce:transition-none"
				aria-label="Next testimonial"
				onclick={() => goTo(index + 1)}
			>
				<span class="hidden sm:inline">Next</span>
				<span class="sm:hidden" aria-hidden="true">›</span>
			</button>
		</div>
	{/if}
</div>
