<script lang="ts">
	import { hubspot, site } from '@/config/site';
	import { onMount } from 'svelte';

	type Hbspt = {
		forms: {
			create: (options: {
				region: string;
				portalId: string;
				formId: string;
				target: HTMLElement | string;
				onFormReady?: () => void;
				onFormFailedToLoad?: () => void;
			}) => void;
		};
	};

	let container = $state<HTMLDivElement | undefined>(undefined);
	let loaded = $state(false);
	let error = $state(false);

	const { portalId, formId, region } = hubspot.contactForm;

	onMount(() => {
		const win = window as Window & { hbspt?: Hbspt };

		function createForm() {
			if (!win.hbspt || !container) return;
			try {
				win.hbspt.forms.create({
					region,
					portalId,
					formId,
					target: container,
					onFormReady: () => {
						loaded = true;
					},
					onFormFailedToLoad: () => {
						error = true;
					},
				});
				loaded = true;
			} catch {
				error = true;
			}
		}

		if (win.hbspt) {
			createForm();
			return;
		}

		const script = document.createElement('script');
		script.src = 'https://js.hsforms.net/forms/embed/v2.js';
		script.charset = 'utf-8';
		script.async = true;
		script.onload = createForm;
		script.onerror = () => {
			error = true;
		};
		document.head.appendChild(script);

		return () => {
			script.remove();
		};
	});
</script>

<div class="contact-form">
	{#if error}
		<p class="text-sm text-text-muted">
			Unable to load the contact form.
			<a href="/contact/" class="font-semibold text-brand hover:underline">Refresh the page</a>
			or email
			<a href="mailto:{site.email}" class="text-brand hover:underline">{site.email}</a>.
		</p>
	{:else}
		{#if !loaded}
			<p class="text-sm text-text-muted" aria-live="polite">Loading contact form…</p>
		{/if}
		<div
			bind:this={container}
			class:opacity-0={!loaded}
			class="min-h-[14rem] transition-opacity duration-300 motion-reduce:transition-none"
		></div>
	{/if}
</div>

<style>
	@reference "../../styles/global.css";

	.contact-form :global(.hs-form) {
		@apply font-sans;
	}

	.contact-form :global(.hs-form label) {
		@apply font-display text-sm font-semibold text-text-heading;
	}

	.contact-form :global(.hs-input),
	.contact-form :global(.hs-fieldtype-textarea textarea),
	.contact-form :global(select.hs-input) {
		@apply w-full rounded-sm border border-text-subtle/30 bg-surface px-3 py-2.5 text-base text-text focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20;
	}

	.contact-form :global(.hs-button) {
		@apply !rounded-button !bg-brand !px-8 !py-3 !font-display !uppercase hover:!bg-brand-dark;
	}
</style>
