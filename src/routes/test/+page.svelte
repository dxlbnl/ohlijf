<script lang="ts">
	import raw_vragen from './vragen.yaml';
	import rehypeSanitize from 'rehype-sanitize';
	import rehypeStringify from 'rehype-stringify';
	import remarkParse from 'remark-parse';
	import remarkRehype from 'remark-rehype';
	import { unified } from 'unified';
	import { z } from 'zod';

	const file = unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeSanitize)
		.use(rehypeStringify);

	const questionSchema = z
		.object({
			question: z.string(),
			explanation: z.string().optional(),
			answers: z.string().array()
		})
		.array();

	const questions = questionSchema.parse(raw_vragen);

	let currentIndex = 0;
	$: current = questions[currentIndex];
</script>

<h2 class="heading">Vraag {currentIndex + 1}/{questions.length}</h2>
<p>
	{#await file.process(current.question) then question}
		{@html question}
	{/await}
</p>

{#if current.explanation}
	<p>
		{#await file.process(current.explanation) then explanation}
			{@html explanation}
		{/await}
	</p>
{/if}

<ul>
	{#each current.answers as answer}
		<li>
			<button
				on:click={() => {
					if (currentIndex + 1 < questions.length) {
						currentIndex++;
					}
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
