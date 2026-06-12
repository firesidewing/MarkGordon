const PROGRESS_ID = 'nav-progress';
const BAR_SELECTOR = '.nav-progress__bar';
const PENDING_CLASS = 'nav-link-pending';
const ACTIVE_CLASS = 'is-active';
const PROCESSING_CLASS = 'is-processing';

let bar: HTMLElement | null = null;
let container: HTMLElement | null = null;
let progress = 0;
let trickleTimer: ReturnType<typeof setInterval> | null = null;
let pendingAnchor: HTMLAnchorElement | null = null;

function getElements() {
	if (!container) container = document.getElementById(PROGRESS_ID);
	if (!bar && container) bar = container.querySelector<HTMLElement>(BAR_SELECTOR);
	return { container, bar };
}

function setProgress(value: number) {
	const { bar: barEl } = getElements();
	if (!barEl) return;
	progress = Math.min(100, Math.max(0, value));
	barEl.style.width = `${progress}%`;
}

function clearPendingAnchor() {
	if (pendingAnchor) {
		pendingAnchor.classList.remove(PENDING_CLASS);
		pendingAnchor = null;
	}
}

function stopTrickle() {
	if (trickleTimer) {
		clearInterval(trickleTimer);
		trickleTimer = null;
	}
}

function start() {
	const { container: root } = getElements();
	if (!root) return;
	stopTrickle();
	progress = 0;
	setProgress(8);
	root.classList.add(ACTIVE_CLASS);
	document.documentElement.classList.add('is-navigating');

	trickleTimer = setInterval(() => {
		if (progress < 90) {
			const increment = progress < 50 ? 4 : progress < 80 ? 2 : 0.5;
			setProgress(progress + increment);
		}
	}, 200);
}

function clearProcessingState() {
	document.querySelectorAll(`.${PROCESSING_CLASS}`).forEach((el) => {
		el.classList.remove(PROCESSING_CLASS);
	});
}

function finish() {
	stopTrickle();
	setProgress(100);
	clearPendingAnchor();
	clearProcessingState();

	const { container: root } = getElements();
	window.setTimeout(() => {
		root?.classList.remove(ACTIVE_CLASS);
		document.documentElement.classList.remove('is-navigating');
		setProgress(0);
	}, 280);
}

function isInternalNavigation(anchor: HTMLAnchorElement, event: MouseEvent): boolean {
	if (event.defaultPrevented) return false;
	if (event.button !== 0) return false;
	if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return false;
	if (anchor.target === '_blank') return false;
	if (anchor.hasAttribute('download')) return false;

	const href = anchor.getAttribute('href');
	if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return false;

	try {
		const url = new URL(href, window.location.href);
		if (url.origin !== window.location.origin) return false;
		if (url.pathname === window.location.pathname && url.search === window.location.search) return false;
	} catch {
		return false;
	}

	return true;
}

function markPending(anchor: HTMLAnchorElement) {
	clearPendingAnchor();
	pendingAnchor = anchor;
	anchor.classList.add(PENDING_CLASS);
}

function onClick(event: MouseEvent) {
	const target = event.target;
	if (!(target instanceof Element)) return;

	const anchor = target.closest('a');
	if (anchor && isInternalNavigation(anchor, event)) {
		markPending(anchor);
		start();
		return;
	}

	const cta = target.closest('.btn-interactive');
	if (cta instanceof HTMLElement && !(cta instanceof HTMLButtonElement && cta.type === 'button')) {
		if (!anchor) {
			cta.classList.add(PROCESSING_CLASS);
			start();
		}
		return;
	}

	const button = target.closest('button, [role="button"]');
	if (button instanceof HTMLElement && button.closest('form[method="get"], form:not([method])')) {
		button.classList.add(PROCESSING_CLASS);
		start();
	}
}

function onSubmit(event: SubmitEvent) {
	const form = event.target;
	if (!(form instanceof HTMLFormElement)) return;
	if (form.target === '_blank') return;

	const method = (form.method || 'get').toLowerCase();
	if (method === 'get' || method === 'post') {
		const submitter = event.submitter;
		if (submitter instanceof HTMLElement) submitter.classList.add(PROCESSING_CLASS);
		start();
	}
}

function bindAstroTransitions() {
	document.addEventListener('astro:before-preparation', start);
	document.addEventListener('astro:after-swap', finish);
}

export function initNavigationProgress() {
	if (typeof window === 'undefined') return;

	bindAstroTransitions();

	document.addEventListener('click', onClick, true);
	document.addEventListener('submit', onSubmit, true);
	window.addEventListener('pageshow', finish);
	window.addEventListener('load', finish);
}
