<script lang="ts">
	// import { answers } from './answerStore';
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
					// answers.set(currentIndex, answer);
					goto(data.next);
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
		margin: 4rem;
		justify-content: start;
		gap: 2rem;
	}

	p {
		& :global(ul > li) {
			margin-block: 0.5rem;
		}
	}
</style>
