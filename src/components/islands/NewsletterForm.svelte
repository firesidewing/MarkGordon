<script lang="ts">
	import { hubspot } from '@/config/site';
	import { onMount } from 'svelte';

	type Hbspt = {
		forms: {
			create: (options: {
				region: string;
				portalId: string;
				formId: string;
				target: HTMLElement | string;
			}) => void;
		};
	};

	let container: HTMLDivElement;
	let loaded = $state(false);
	let error = $state(false);

	const { portalId, formId, region } = hubspot.newsletterForm;

	onMount(() => {
		const win = window as Window & { hbspt?: Hbspt };

		function createForm() {
			if (!win.hbspt || !container) return;
			win.hbspt.forms.create({ region, portalId, formId, target: container });
			loaded = true;
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

<div class="newsletter-form">
	{#if error}
		<p class="text-sm text-text-muted">
			Unable to load the signup form.
			<a href="/newsletter-signup/" class="font-semibold text-brand hover:underline">Try the signup page</a>
			or email <a href="mailto:mark@markgordon.ca" class="text-brand hover:underline">mark@markgordon.ca</a>.
		</p>
	{:else}
		<div bind:this={container} class:opacity-0={!loaded} class="min-h-[10rem] transition-opacity duration-300"></div>
	{/if}
</div>

<style>
	@reference "../../styles/global.css";

	.newsletter-form :global(.hs-form) {
		@apply font-sans;
	}

	.newsletter-form :global(.hs-button) {
		@apply !rounded-button !bg-brand !font-display uppercase;
	}
</style>
