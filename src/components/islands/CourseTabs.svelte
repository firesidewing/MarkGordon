<script lang="ts">
	type Tab = {
		title: string;
		question: string;
		body: string;
		href: string;
	};

	let { tabs }: { tabs: Tab[] } = $props();

	let active = $state(0);
	let tablistEl = $state<HTMLDivElement | undefined>(undefined);

	function selectTab(index: number) {
		active = index;
		tablistEl?.querySelector<HTMLButtonElement>(`#course-tab-${index}`)?.focus();
	}

	function onTabKeydown(event: KeyboardEvent, index: number) {
		let next = index;
		switch (event.key) {
			case 'ArrowRight':
				next = (index + 1) % tabs.length;
				break;
			case 'ArrowLeft':
				next = (index - 1 + tabs.length) % tabs.length;
				break;
			case 'Home':
				next = 0;
				break;
			case 'End':
				next = tabs.length - 1;
				break;
			default:
				return;
		}
		event.preventDefault();
		selectTab(next);
	}
</script>

<div>
	<div bind:this={tablistEl} role="tablist" aria-label="More courses" class="flex flex-wrap">
		{#each tabs as tab, index}
			<button
				type="button"
				role="tab"
				id="course-tab-{index}"
				tabindex={active === index ? 0 : -1}
				aria-selected={active === index}
				aria-controls="course-panel-{index}"
				class={[
					'btn-interactive min-h-11 border border-b-0 border-surface-muted px-5 py-3 font-display text-sm font-medium',
					active === index
						? 'border-t-brand border-x-brand bg-surface text-text-heading'
						: 'bg-surface-alt text-text-muted hover:text-text-heading',
				]}
				onclick={() => (active = index)}
				onkeydown={(event) => onTabKeydown(event, index)}
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
			tabindex="0"
			class="border border-surface-muted bg-surface px-6 py-8 sm:px-8"
		>
			<p class="font-display text-base font-semibold text-text-heading">{tab.question}</p>
			<p class="mt-4 text-sm leading-relaxed text-text-muted">{tab.body}</p>
			<a
				href={tab.href}
				class="link-interactive mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-brand hover:underline"
			>
				Start {tab.title}
			</a>
		</div>
	{/each}
</div>
