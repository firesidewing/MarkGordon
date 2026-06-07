<script lang="ts">
	type Tab = {
		title: string;
		question: string;
		body: string;
		href: string;
	};

	let { tabs }: { tabs: Tab[] } = $props();

	let active = $state(0);
</script>

<div>
	<div role="tablist" aria-label="More courses" class="flex flex-wrap">
		{#each tabs as tab, index}
			<button
				type="button"
				role="tab"
				id="course-tab-{index}"
				aria-selected={active === index}
				aria-controls="course-panel-{index}"
				class={[
					'border border-b-0 border-surface-muted px-5 py-3 font-display text-sm font-medium transition-colors',
					active === index
						? 'border-t-brand border-x-brand bg-surface text-text-heading'
						: 'bg-surface-alt text-text-muted hover:text-text-heading',
				]}
				onclick={() => (active = index)}
			>
				{tab.title}
			</button>
		{/each}
	</div>

	{#each tabs as tab, index}
		<div
			role="tabpanel"
			id="course-panel-{index}"
			aria-labelledby="course-tab-{index}"
			hidden={active !== index}
			class="border border-surface-muted bg-surface px-6 py-8 sm:px-8"
		>
			<p class="font-display text-base font-semibold text-text-heading">{tab.question}</p>
			<p class="mt-4 text-sm leading-relaxed text-text-muted">{tab.body}</p>
			<a
				href={tab.href}
				class="mt-6 inline-block text-sm font-semibold text-brand hover:underline"
			>
				Get Started Now!
			</a>
		</div>
	{/each}
</div>
