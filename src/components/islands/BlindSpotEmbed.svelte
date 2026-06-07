<script lang="ts">
	import { blindSpot } from '@/config/site';
	import { onMount } from 'svelte';

	let wrapper: HTMLDivElement;
	let loaded = $state(false);
	let error = $state(false);

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://www.riddle.com/embed/build-embedjs/embedV2.js';
		script.async = true;
		script.onload = () => {
			loaded = true;
		};
		script.onerror = () => {
			error = true;
		};
		wrapper.appendChild(script);

		return () => {
			script.remove();
		};
	});
</script>

{#if error}
	<div class="rounded-sm bg-surface-muted p-8 text-center">
		<p class="mb-4 text-text-muted">The assessment embed could not be loaded.</p>
		<a
			href={blindSpot.directUrl}
			class="inline-flex items-center justify-center rounded-button bg-brand px-11 py-3.5 font-display text-button font-button uppercase text-text-inverse transition-colors hover:bg-brand-dark"
			target="_blank"
			rel="noopener noreferrer"
		>
			Take the Free Test Now
		</a>
	</div>
{:else}
	<div
		bind:this={wrapper}
		class="riddle2-wrapper mx-auto max-w-[640px] transition-opacity duration-300"
		class:opacity-0={!loaded}
		data-rid-id={blindSpot.riddleId}
		data-auto-scroll="true"
		data-is-fixed-height-enabled="false"
		data-bg="#fff"
		data-fg="#00205b"
		data-embed-url="https://www.riddle.com/embed/a/{blindSpot.riddleId}?lazyImages=true&staticHeight=false"
	>
		<noscript>
			<a href={blindSpot.directUrl} class="inline-flex items-center justify-center rounded-button bg-brand px-11 py-3.5 font-display text-button font-button uppercase text-text-inverse transition-colors hover:bg-brand-dark" target="_blank" rel="noopener noreferrer">
				Take the Free Test Now
			</a>
		</noscript>
	</div>
{/if}
