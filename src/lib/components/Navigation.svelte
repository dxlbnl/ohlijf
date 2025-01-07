<script context="module" lang="ts">
	import { z } from 'zod';

	export const menuItemSchema = z.object({
		path: z.string(),
		label: z.string(),
		special: z.boolean().optional()
	})

	export const menuSchema = z.array(
		menuItemSchema.extend({
			items: menuItemSchema.array().optional()
		})
	);
	export type Menu = z.infer<typeof menuSchema>;
</script>

<script lang="ts">
	import { page } from '$app/stores';

	export let menu: Menu = [];
	let menuOpen = false;
	let navEl: HTMLElement;

	const closeMenu = (e: MouseEvent) => {
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
				<li data-active={$page.url.pathname === item.path} class:special={item.special}>
					<a href={item.path}>{item.label}</a>

					{#if item.items}
						<ul class='submenu'>
							{#each item.items as subitem}
								<li data-active={$page.url.pathname === subitem.path} class:special={subitem.special}>
									<a href={subitem.path}>{subitem.label}</a>
								</li>
							{/each}
						</ul>
					{/if}
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

		& a {
			color: var(--green);
		}


		&  ul {
			display: grid;
			grid-auto-flow: column;
			justify-items: end;
			align-items: center;
			gap: 1rem;

			padding: 0;
			margin: 0;
			list-style: none;

			font-weight: 600;

			transition-duration: 0.25s;

			& > li {
				white-space: nowrap;


				&:has(a:hover,a:focus) .submenu {
					max-height: 100%;
				}
			}
			& a {
				display: block;
				height: 4.5rem;
				min-width: 100%;
				line-height: 4.5rem;
				text-decoration: none;
				transition: 0.25s;

				&:hover {
					color: var(--dark-green);
				}
			}
		}

		& .submenu {
			transition: all .3s;
			max-height: 0;
			overflow: hidden;
			position: absolute;
			background: white;

			& a {
				height: auto;
				line-height: 3rem;
				text-align: center;
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
			height: auto;
			line-height: 1rem;
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
