<script lang="ts">
	import { results } from '../store';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let data: PageData;
</script>

<h2 class="heading">{data.heading}</h2>
<p>
	{@html data.question}
</p>

{#if data.explanation}
	<p>
		{@html data.explanation}
	</p>
{/if}

<ul>
	{#each data.answers as answer}
		<li>
			<button
				on:click={() => {
					results.set(data.index, answer);
					goto(data.next, { noScroll: true });
				}}>{answer}</button
			>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		padding: 0;
		display: grid;
		grid-auto-flow: column;
		margin: 2rem;
		justify-content: start;
		gap: 2rem;

		& button {
			width: 100%;
		}
	}

	p {
		& :global(ul > li) {
			margin-block: 0.5rem;
		}
	}

	@media (max-width: 600px) {
		ul {
			grid-auto-flow: row;
			margin-block: 1rem;
			padding: 1rem;
			gap: 1rem;
			width: 20%;
		}
	}
</style>
