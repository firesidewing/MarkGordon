<script lang="ts">
	import { hubspot } from '@/config/site';

	interface Props {
		submitLabel?: string;
		inputId?: string;
	}

	let { submitLabel = 'Subscribe', inputId = 'newsletter-email' }: Props = $props();

	let email = $state('');
	let status = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');

	const { portalId, formId } = hubspot.newsletterForm;

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (status === 'submitting') return;

		const value = email.trim();
		if (!value) return;

		status = 'submitting';

		try {
			const res = await fetch(
				`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						fields: [{ name: 'email', value }],
						context: {
							pageUri: window.location.href,
							pageName: document.title,
						},
					}),
				},
			);

			if (!res.ok) throw new Error('submit failed');
			status = 'success';
			email = '';
		} catch {
			status = 'error';
		}
	}
</script>

{#if status === 'success'}
	<p class="text-base font-medium text-text-heading" role="status">
		You're in. Watch your inbox for practical leadership notes from Mark.
	</p>
{:else}
	<form class="flex flex-col gap-3 sm:flex-row sm:items-stretch" onsubmit={handleSubmit}>
		<label class="sr-only" for={inputId}>Email address</label>
		<input
			id={inputId}
			name="email"
			type="email"
			autocomplete="email"
			required
			placeholder="Email address"
			bind:value={email}
			disabled={status === 'submitting'}
			class="min-h-12 w-full flex-1 rounded-button border border-surface-muted bg-surface px-4 text-base text-text-heading placeholder:text-text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
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
			Unable to subscribe right now.
			<a href="/newsletter-signup/" class="font-semibold text-brand hover:underline">Try the signup page</a>
			or email
			<a href="mailto:mark@markgordon.ca" class="text-brand hover:underline">mark@markgordon.ca</a>.
		</p>
	{/if}
{/if}
