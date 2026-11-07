<script lang="ts">
	import { site } from '@/config/site';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let fax = $state('');
	let status = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
	let errorMessage = $state('');

	async function submit(event: SubmitEvent) {
		event.preventDefault();
		if (status === 'submitting') return;

		status = 'submitting';
		errorMessage = '';

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({ name, email, message, fax }),
			});
			const data: unknown = await response.json().catch(() => null);
			const serverError =
				data && typeof data === 'object' && 'error' in data && typeof data.error === 'string'
					? data.error
					: '';
			if (!response.ok) {
				errorMessage = serverError || 'Unable to send your message right now.';
				status = 'error';
				return;
			}
			status = 'success';
		} catch (cause) {
			console.error(cause);
			errorMessage = 'Unable to send your message right now.';
			status = 'error';
		}
	}
</script>

{#if status === 'success'}
	<p class="text-base font-medium text-text-heading" role="status">
		Thanks for reaching out. Mark will be in touch shortly.
	</p>
{:else}
	<form class="space-y-4" method="post" action="/api/contact" data-astro-reload onsubmit={submit}>
		<div class="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
			<label>
				Fax
				<input name="fax" tabindex="-1" autocomplete="off" bind:value={fax} />
			</label>
		</div>

		<div>
			<label class="font-display text-sm font-semibold text-text-heading" for="contact-name">Name</label>
			<input
				id="contact-name"
				name="name"
				type="text"
				autocomplete="name"
				required
				maxlength="120"
				bind:value={name}
				disabled={status === 'submitting'}
				class="mt-1.5 w-full rounded-sm border border-text-subtle/30 bg-surface px-3 py-2.5 text-base text-text focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
			/>
		</div>

		<div>
			<label class="font-display text-sm font-semibold text-text-heading" for="contact-email">Email</label>
			<input
				id="contact-email"
				name="email"
				type="email"
				autocomplete="email"
				required
				maxlength="254"
				bind:value={email}
				disabled={status === 'submitting'}
				class="mt-1.5 w-full rounded-sm border border-text-subtle/30 bg-surface px-3 py-2.5 text-base text-text focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
			/>
		</div>

		<div>
			<label class="font-display text-sm font-semibold text-text-heading" for="contact-message">Message</label>
			<textarea
				id="contact-message"
				name="message"
				required
				rows="6"
				maxlength="5000"
				bind:value={message}
				disabled={status === 'submitting'}
				class="mt-1.5 w-full rounded-sm border border-text-subtle/30 bg-surface px-3 py-2.5 text-base text-text focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20"
			></textarea>
		</div>

		<button
			type="submit"
			disabled={status === 'submitting'}
			class="rounded-button bg-brand px-8 py-3 font-display text-button font-button uppercase text-text-inverse hover:bg-brand-dark disabled:opacity-70"
		>
			{status === 'submitting' ? 'Sending…' : 'Send message'}
		</button>

		{#if status === 'error'}
			<p class="text-sm text-text-muted" role="alert">
				{errorMessage}
				<a href="mailto:{site.email}" class="font-semibold text-brand hover:underline">{site.email}</a>
			</p>
		{/if}
	</form>
{/if}
