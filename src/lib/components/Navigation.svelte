<script lang="ts">
	import { page } from '$app/stores';

	export let menu: { path: string; label: string }[] = [];
	let menuOpen = false;
	let navEl: HTMLElement;

	const closeMenu = (e: MouseEvent) => {
		console.log('target', e.target);

		let el: HTMLElement | null = e.target as HTMLElement;

		if (el.tagName === 'A') {
			menuOpen = false;
		}

		while ((el && el !== navEl) || el === document.body) {
			el = el.parentElement;
		}
		if (el != navEl) {
			menuOpen = false;
		}
	};
</script>

<nav bind:this={navEl}>
	<a class="logo" href="/">
		<h1><span style:color="var(--light-green)">Oh</span>Lijf</h1>
		<img src="/icons/logo.svg" alt="OhLijf logo" width="60" height="56" /></a
	>

	<input id="menu_state" type="checkbox" bind:checked={menuOpen} />
	<label for="menu_state" class="menu-toggle">
		<div class="icon">
			<span />
			<span />
			<span />
		</div>
	</label>

	{#if menu.length}
		<ul>
			{#each menu as item}
				<li data-active={$page.url.pathname === item.path}>
					<a href={item.path}>{item.label}</a>
				</li>
			{/each}
		</ul>
	{/if}
</nav>

<svelte:body on:click={closeMenu} />

<style>
	nav {
		--nav-height: 4.5rem;

		grid-area: navigation;

		display: grid;
		grid-template-columns: minmax(20ch, auto) auto;
		justify-content: space-between;
		align-items: center;

		height: var(--nav-height);
		padding: 0 var(--nav-height);
		background: var(--white);

		container-name: nav;
		container-type: size;

		& * {
			color: var(--green);
		}

		& > ul {
			display: grid;
			grid-auto-flow: column;
			justify-items: end;
			align-items: center;
			gap: 1rem;

			padding: 0;
			margin: 0;
			list-style: none;

			color: white;
			font-weight: 600;

			transition-duration: 0.25s;

			& > li {
				white-space: nowrap;
			}
			& a {
				text-decoration: none;
				transition: 0.25s;

				&:hover {
					color: var(--dark-green);
				}
			}
		}
	}

	.logo {
		display: grid;
		grid-template-columns: min-content auto;
		gap: 0.5rem;
		align-items: center;
		text-decoration: none;
		overflow: hidden;

		& h1 {
			font-family: 'Bellota', sans-serif;
			margin: 0;
			font-size: 2.5rem;
			font-weight: bold;
		}
		& img {
			max-height: 3.5rem;
		}
	}

	.menu-toggle {
		display: none;

		& .icon {
			width: 2rem;
			height: 2rem;
			cursor: pointer;

			display: grid;
			grid-auto-flow: row;
			grid-auto-rows: 1fr;
			align-items: center;

			& > span {
				width: 100%;
				height: 4px;
				background-color: var(--green);
				transition-duration: 0.25s;
			}
		}
	}
	#menu_state {
		opacity: 0;
		display: contents;
		&:checked + .menu-toggle > .icon {
			grid-template-areas: 'stack';
			& > span {
				grid-area: stack;
				position: rel;
				transform: rotate(45deg);
				&:last-child {
					transform: rotate(135deg);
				}
			}
		}
	}

	@container nav (max-width: 760px) {
		nav > ul {
			display: none;
			position: fixed;
			/* right: -100%; */
			grid-auto-flow: row;
			top: var(--nav-height);
			background: white;
			box-shadow: var(--box-shadow);
		}
		nav > ul > li > a {
			display: block;
			padding: 0.5rem 1rem;
		}

		.menu-toggle {
			display: inherit;
		}
		#menu_state:checked ~ ul {
			right: 0 !important;
			display: inherit;
		}
	}
</style>
