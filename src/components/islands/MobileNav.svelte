<script lang="ts">
	type NavLink = {
		label: string;
		href: string;
		external?: boolean;
	};

	type NavItem = NavLink & {
		children?: NavLink[];
	};

	interface Props {
		nav: NavItem[];
		currentPath: string;
	}

	let { nav, currentPath }: Props = $props();

	let open = $state(false);
	let expanded = $state<Record<string, boolean>>({});

	function setBodyScroll(locked: boolean) {
		document.body.style.overflow = locked ? 'hidden' : '';
	}

	function toggleMenu() {
		open = !open;
		setBodyScroll(open);
		if (!open) expanded = {};
	}

	function toggleSubmenu(label: string) {
		expanded = { ...expanded, [label]: !expanded[label] };
	}

	function closeMenu() {
		open = false;
		setBodyScroll(false);
		expanded = {};
	}

	function isActive(href: string) {
		return href !== '#' && currentPath === href;
	}
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'Escape' && open) closeMenu();
	}}
/>

<div class="lg:hidden">
	<button
		type="button"
		class="flex h-10 w-10 items-center justify-center rounded-md text-text-heading hover:bg-surface-muted"
		aria-expanded={open}
		aria-controls="mobile-nav-panel"
		aria-label={open ? 'Close menu' : 'Open menu'}
		onclick={toggleMenu}
	>
		{#if open}
			<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
				<path d="M6 6l12 12M18 6L6 18" />
			</svg>
		{:else}
			<svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
				<path d="M4 7h16M4 12h16M4 17h16" />
			</svg>
		{/if}
	</button>

	{#if open}
		<button
			type="button"
			class="fixed inset-0 z-40 bg-black/40"
			aria-label="Close menu overlay"
			onclick={closeMenu}
		></button>

		<nav
			id="mobile-nav-panel"
			class="fixed inset-y-0 right-0 z-50 flex w-[min(20rem,85vw)] animate-[slideIn_0.2s_ease-out] flex-col overflow-y-auto bg-surface shadow-xl"
			aria-label="Mobile navigation"
		>
			<div class="flex items-center justify-between border-b border-surface-muted px-4 py-3">
				<span class="font-display text-sm font-medium uppercase tracking-wide text-text-heading">Menu</span>
				<button
					type="button"
					class="flex h-8 w-8 items-center justify-center rounded-md hover:bg-surface-muted"
					aria-label="Close menu"
					onclick={closeMenu}
				>
					<svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
						<path d="M6 6l12 12M18 6L6 18" />
					</svg>
				</button>
			</div>

			<ul class="flex-1 py-2" role="list">
				{#each nav as item (item.label)}
					<li class="border-b border-surface-muted/60 last:border-b-0">
						{#if item.children}
							<button
								type="button"
								class="flex w-full items-center justify-between px-4 py-3 text-left font-display text-nav font-medium text-text-heading"
								aria-expanded={expanded[item.label] ?? false}
								onclick={() => toggleSubmenu(item.label)}
							>
								{item.label}
								<svg
									class="h-4 w-4 transition-transform {expanded[item.label] ? 'rotate-180' : ''}"
									viewBox="0 0 12 12"
									fill="currentColor"
									aria-hidden="true"
								>
									<path d="M2.5 4.5L6 8l3.5-3.5" />
								</svg>
							</button>
							{#if expanded[item.label]}
								<ul class="bg-surface-muted/50 pb-2" role="list">
									{#each item.children as child (child.label)}
										<li>
											<a
												href={child.href}
												class="block px-6 py-2.5 text-sm text-text-heading hover:text-brand {isActive(child.href) ? 'text-brand' : ''}"
												target={child.external ? '_blank' : undefined}
												rel={child.external ? 'noopener noreferrer' : undefined}
												onclick={closeMenu}
											>
												{child.label}
											</a>
										</li>
									{/each}
								</ul>
							{/if}
						{:else}
							<a
								href={item.href}
								class="block px-4 py-3 font-display text-nav font-medium text-text-heading hover:text-brand {isActive(item.href) ? 'text-brand' : ''}"
								onclick={closeMenu}
							>
								{item.label}
							</a>
						{/if}
					</li>
				{/each}
			</ul>

			<div class="border-t border-surface-muted px-4 py-4">
				<a
					href="/registration/"
					class="inline-flex w-full items-center justify-center rounded-button bg-brand px-11 py-3.5 text-center font-display text-sm text-button font-button uppercase text-text-inverse transition-colors hover:bg-brand-dark"
					onclick={closeMenu}
				>
					Login
				</a>
			</div>
		</nav>
	{/if}
</div>

<style>
	@keyframes slideIn {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0);
		}
	}
</style>
