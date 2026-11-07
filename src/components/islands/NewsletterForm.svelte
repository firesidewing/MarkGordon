<script lang="ts">
	import { site } from '@/config/site';

	interface Props {
		submitLabel?: string;
		inputId?: string;
	}

	let { submitLabel = 'Subscribe', inputId = 'newsletter-email' }: Props = $props();

	let email = $state('');
	let fax = $state('');
	let status = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
	let errorMessage = $state('');

	async function subscribe(event: SubmitEvent) {
		event.preventDefault();
		if (status === 'submitting') return;

		status = 'submitting';
		errorMessage = '';

		try {
			const response = await fetch('/api/newsletter', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({ email, fax }),
			});
			const data: unknown = await response.json().catch(() => null);
			const serverError =
				data && typeof data === 'object' && 'error' in data && typeof data.error === 'string'
					? data.error
					: '';
			if (!response.ok) {
				errorMessage = serverError || 'Unable to subscribe right now.';
				status = 'error';
				return;
			}
			status = 'success';
			email = '';
		} catch (cause) {
			console.error(cause);
			errorMessage = 'Unable to subscribe right now.';
			status = 'error';
		}
	}
</script>

{#if status === 'success'}
	<p class="text-base font-medium text-text-heading" role="status">
		You're in. Watch your inbox for practical leadership notes from Mark.
	</p>
{:else}
	<form
		class="flex flex-col gap-3 sm:flex-row sm:items-stretch"
		method="post"
		action="/api/newsletter"
		data-astro-reload
		onsubmit={subscribe}
	>
		<div class="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
			<label>
				Fax
				<input name="fax" tabindex="-1" autocomplete="off" bind:value={fax} />
			</label>
		</div>
		<label class="sr-only" for={inputId}>Email address</label>
		<input
			id={inputId}
			name="email"
			type="email"
			autocomplete="email"
			required
			maxlength="254"
			placeholder="Email address"
			bind:value={email}
			disabled={status === 'submitting'}
			class="min-h-12 w-full flex-1 rounded-button border border-text-muted/30 bg-surface px-4 text-base text-text-heading placeholder:text-text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
		/>
		<button
			type="submit"
			disabled={status === 'submitting'}
			class="btn-interactive inline-flex min-h-12 shrink-0 items-center justify-center rounded-button bg-brand px-8 py-3 font-display text-button font-button text-text-inverse hover:bg-brand-dark disabled:opacity-70"
		>
			{status === 'submitting' ? 'Subscribing…' : submitLabel}
		</button>
	</form>
	{#if status === 'error'}
		<p class="mt-3 text-sm text-text-muted" role="alert">
			{errorMessage}
			<a href="mailto:{site.email}" class="text-brand hover:underline">{site.email}</a>.
		</p>
	{/if}
{/if}
