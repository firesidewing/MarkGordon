<script lang="ts">
	type Pillar = {
		number: string;
		title: string;
		tagline: string;
		body: string;
	};

	let { items }: { items: Pillar[] } = $props();

	let openIndex = $state<number | null>(0);

	function toggle(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<div class="space-y-3">
	{#each items as item, index (item.number)}
		<div class="border border-surface-muted bg-surface">
			<button
				type="button"
				class="flex w-full min-h-11 items-center justify-between gap-4 px-5 py-4 text-left font-display text-base font-semibold text-text-heading sm:px-6 sm:text-lg"
				aria-expanded={openIndex === index}
				onclick={() => toggle(index)}
			>
				<span>
					<span class="mr-2 text-sm font-semibold uppercase tracking-wide text-brand" aria-hidden="true">
						{item.number}
					</span>
					{item.title}
				</span>
				<span
					class="shrink-0 text-brand transition-transform motion-reduce:transition-none {openIndex ===
					index
						? 'rotate-180'
						: ''}"
					aria-hidden="true"
				>
					<svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
						<path
							fill-rule="evenodd"
							d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
							clip-rule="evenodd"
						/>
					</svg>
				</span>
			</button>
			{#if openIndex === index}
				<div class="border-t border-surface-muted px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
					<p class="font-display text-sm font-semibold text-brand">{item.tagline}</p>
					<p class="mt-2 text-base leading-relaxed text-text">{item.body}</p>
				</div>
			{/if}
		</div>
	{/each}
</div>
