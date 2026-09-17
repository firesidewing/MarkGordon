<script lang="ts">
	import { hubspot, site } from '@/config/site';
	import { contactTopicOptions } from '@/data/contact';

	type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let organization = $state('');
	let topic = $state('');
	let message = $state('');
	let state = $state<SubmitState>('idle');
	let errorMessage = $state('');

	const { portalId, formId } = hubspot.contactForm;

	function splitName(full: string): { firstname: string; lastname: string } {
		const trimmed = full.trim();
		const space = trimmed.indexOf(' ');
		if (space === -1) return { firstname: trimmed, lastname: '' };
		return {
			firstname: trimmed.slice(0, space),
			lastname: trimmed.slice(space + 1).trim(),
		};
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		if (!name.trim() || !email.trim() || !message.trim()) return;

		state = 'submitting';
		errorMessage = '';

		const { firstname, lastname } = splitName(name);
		const topicLine = topic ? `Interest: ${topic}\n\n` : '';
		const fullMessage = `${topicLine}${message.trim()}`;

		if (!formId) {
			const subject = encodeURIComponent('Message from markgordon.ca');
			const body = encodeURIComponent(
				`Name: ${name}\nEmail: ${email}\nPhone: ${phone || '—'}\nOrganization: ${organization || '—'}\n\n${fullMessage}`,
			);
			window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
			state = 'success';
			return;
		}

		try {
			const response = await fetch(
				`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						fields: [
							{ name: 'firstname', value: firstname },
							{ name: 'lastname', value: lastname },
							{ name: 'email', value: email.trim() },
							...(phone.trim() ? [{ name: 'phone', value: phone.trim() }] : []),
							...(organization.trim()
								? [{ name: 'company', value: organization.trim() }]
								: []),
							{ name: 'message', value: fullMessage },
						],
					}),
				},
			);

			if (!response.ok) {
				throw new Error('Submission failed');
			}

			state = 'success';
			name = '';
			email = '';
			phone = '';
			organization = '';
			topic = '';
			message = '';
		} catch {
			state = 'error';
			errorMessage =
				'We could not send your message right now. Please email Mark directly or try again in a moment.';
		}
	}
</script>

{#if state === 'success'}
	<div
		class="rounded-sm border border-brand/20 bg-surface-muted px-6 py-8 text-center"
		role="status"
	>
		<p class="font-display text-h4 font-semibold text-text-heading">Thank you for reaching out.</p>
		<p class="mt-2 text-base leading-relaxed text-text-muted">
			Mark will read your message and get back to you soon.
		</p>
	</div>
{:else}
	<form class="contact-form space-y-5" onsubmit={handleSubmit}>
		<div class="grid gap-5 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label class="field-label" for="contact-name">Name</label>
				<input
					id="contact-name"
					name="name"
					type="text"
					required
					autocomplete="name"
					placeholder="First & Last Name"
					bind:value={name}
					class="field-input"
				/>
			</div>
			<div>
				<label class="field-label" for="contact-email">Email</label>
				<input
					id="contact-email"
					name="email"
					type="email"
					required
					autocomplete="email"
					placeholder="Email Address"
					bind:value={email}
					class="field-input"
				/>
			</div>
			<div>
				<label class="field-label" for="contact-phone">Phone <span class="text-text-subtle">(optional)</span></label>
				<input
					id="contact-phone"
					name="phone"
					type="tel"
					autocomplete="tel"
					placeholder="Phone Number"
					bind:value={phone}
					class="field-input"
				/>
			</div>
			<div class="sm:col-span-2">
				<label class="field-label" for="contact-org"
					>Organization <span class="text-text-subtle">(optional)</span></label
				>
				<input
					id="contact-org"
					name="organization"
					type="text"
					autocomplete="organization"
					placeholder="Organization"
					bind:value={organization}
					class="field-input"
				/>
			</div>
			<div class="sm:col-span-2">
				<label class="field-label" for="contact-topic">What can I help you with?</label>
				<select id="contact-topic" name="topic" bind:value={topic} class="field-input">
					<option value="">Select one (optional)</option>
					{#each contactTopicOptions as option}
						<option value={option}>{option}</option>
					{/each}
				</select>
			</div>
			<div class="sm:col-span-2">
				<label class="field-label" for="contact-message">Tell me a little about what you're looking for.</label>
				<textarea
					id="contact-message"
					name="message"
					required
					rows="5"
					placeholder="Message"
					bind:value={message}
					class="field-input min-h-[8rem] resize-y"
				></textarea>
			</div>
		</div>

		{#if state === 'error'}
			<p class="text-sm text-red-700" role="alert">
				{errorMessage}
				<a href="mailto:{site.email}" class="font-semibold text-brand hover:underline">{site.email}</a>
			</p>
		{/if}

		<button
			type="submit"
			class="btn-interactive inline-flex min-h-11 w-full items-center justify-center rounded-button bg-brand px-8 py-3 font-display text-button font-button uppercase text-text-inverse hover:bg-brand-dark sm:w-auto"
			disabled={state === 'submitting'}
		>
			{state === 'submitting' ? 'Sending…' : 'Send Message'}
		</button>
	</form>
{/if}

<style>
	@reference "../../styles/global.css";

	.field-label {
		@apply mb-1.5 block font-display text-sm font-semibold text-text-heading;
	}

	.field-input {
		@apply w-full rounded-sm border border-text-subtle/30 bg-surface px-3 py-2.5 text-base text-text placeholder:text-text-subtle/70 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20;
	}
</style>
