<script lang="ts">
	export let label: string;

	export let type: 'text' | 'email' | 'textarea' = 'text';
</script>

<label>
	{label}
	{#if type === 'textarea'}
		<textarea {...$$restProps} />
	{:else}
		<input {type} {...$$restProps} />
	{/if}

	<slot />
</label>

<style>
	input {
		margin-block: 0.5rem 1rem;
		width: clamp(10ch, 100%, 50ch);
	}

	textarea {
		margin-block: 0.5rem 1rem;
		height: 15ch;
		min-height: 10ch;
		min-width: 10ch;
		width: clamp(10ch, 100%, 42ch);
	}
</style>
