<!--
@component
Sticky site header: logo, navigation and a pop call-to-action. Below 900px the navigation
collapses behind a menu toggle.
-->
<script lang="ts">
	import { page } from '$app/state';
	import Button from './Button.svelte';
	import type { NavItem } from './types';

	type Props = {
		items?: NavItem[];
		cta?: NavItem;
	};

	let { items = [], cta }: Props = $props();
	let open = $state(false);

	const isExternal = (path: string) => /^https?:\/\//.test(path);
	const isActive = (path: string) => !isExternal(path) && page.url.pathname.startsWith(path);
</script>

<header class="header">
	<a class="brand" href="/" aria-label="OhLijf, naar de homepage">
		<img src="/images/ds/ohlijf-logo.png" alt="OhLijf" width="110" height="38" />
	</a>

	{#if items.length}
		<button
			class="toggle"
			type="button"
			aria-expanded={open}
			aria-controls="site-nav"
			onclick={() => (open = !open)}
		>
			<span class="toggle__bars" aria-hidden="true"></span>
			Menu
		</button>

		<nav id="site-nav" class="nav" class:nav--open={open} aria-label="Hoofdmenu">
			{#each items as item (item.path)}
				<a
					class="nav__link"
					class:is-active={isActive(item.path)}
					aria-current={isActive(item.path) ? 'page' : undefined}
					href={item.path}
					target={isExternal(item.path) ? '_blank' : undefined}
					rel={isExternal(item.path) ? 'noopener noreferrer' : undefined}
					onclick={() => (open = false)}>{item.label}</a
				>
			{/each}
			{#if cta}
				<a
					class="nav__link nav__cta"
					href={cta.path}
					target={isExternal(cta.path) ? '_blank' : undefined}
					rel={isExternal(cta.path) ? 'noopener noreferrer' : undefined}>{cta.label} →</a
				>
			{/if}
		</nav>
	{/if}

	{#if cta}
		<div class="cta">
			<Button
				variant="pop"
				size="sm"
				href={cta.path}
				target={isExternal(cta.path) ? '_blank' : undefined}
				rel={isExternal(cta.path) ? 'noopener noreferrer' : undefined}>{cta.label}</Button
			>
		</div>
	{/if}
</header>

<style>
	.header {
		position: sticky;
		top: 0;
		z-index: 50;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-3) var(--space-6);
		padding: var(--space-3) clamp(16px, 5vw, 56px);
		background: rgba(251, 250, 243, 0.9);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--ink-100);
	}
	.brand img {
		height: 38px;
		width: auto;
	}

	.nav {
		display: flex;
		gap: var(--space-5);
		margin-left: auto;
	}
	.nav__link {
		position: relative;
		font-weight: var(--weight-semibold);
		color: var(--text-body);
		padding: 6px 4px;
	}
	.nav__link:hover,
	.nav__link.is-active {
		color: var(--green-700);
		text-decoration: none;
	}
	.nav__link.is-active::after {
		content: '';
		position: absolute;
		left: 4px;
		right: 4px;
		bottom: -2px;
		height: 3px;
		background: var(--green-500);
		border-radius: 3px;
	}
	.nav__link:focus-visible {
		outline: none;
		box-shadow: var(--ring);
		border-radius: var(--radius-sm);
	}

	.nav__cta {
		display: none;
	}

	.toggle {
		display: none;
		align-items: center;
		gap: var(--space-2);
		margin-left: auto;
		height: var(--control-md);
		padding: 0 var(--space-4);
		font: inherit;
		font-weight: var(--weight-bold);
		color: var(--green-800);
		background: var(--green-100);
		border: 2px solid var(--green-300);
		border-radius: var(--radius-pill);
		cursor: pointer;
	}
	.toggle:focus-visible {
		outline: none;
		box-shadow: var(--ring);
	}
	.toggle__bars,
	.toggle__bars::before,
	.toggle__bars::after {
		display: block;
		width: 16px;
		height: 2px;
		background: currentColor;
		border-radius: 2px;
	}
	.toggle__bars {
		position: relative;
	}
	.toggle__bars::before,
	.toggle__bars::after {
		content: '';
		position: absolute;
		left: 0;
	}
	.toggle__bars::before {
		top: -5px;
	}
	.toggle__bars::after {
		top: 5px;
	}

	@media (max-width: 900px) {
		.toggle {
			display: inline-flex;
		}
		.nav {
			display: none;
			order: 10;
			flex-basis: 100%;
			flex-direction: column;
			gap: 0;
			margin: 0;
			padding-block: var(--space-2);
		}
		.nav--open {
			display: flex;
		}
		.nav__link {
			padding: var(--space-3) var(--space-2);
		}
		.nav__link.is-active::after {
			display: none;
		}
		.cta {
			display: none;
		}
		.nav__cta {
			display: block;
			font-weight: var(--weight-bold);
			color: var(--green-700);
		}
	}
</style>
