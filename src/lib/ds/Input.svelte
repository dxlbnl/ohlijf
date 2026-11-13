<!--
@component
Text input or textarea with label, hint and error, in the OhLijf rounded style.
Supports `bind:value`; any other attribute (name, type, required, …) goes to the control.
-->
<script lang="ts">
	import type { HTMLInputAttributes, HTMLTextareaAttributes } from 'svelte/elements';

	type Props = Omit<HTMLInputAttributes & HTMLTextareaAttributes, 'value'> & {
		/** Visible label above the control. */
		label?: string;
		/** Helper text below the control. */
		hint?: string;
		/** Error message; also marks the control as invalid. */
		error?: string | string[];
		/** Render a textarea instead of an input. */
		multiline?: boolean;
		value?: string | null;
	};

	let {
		label,
		hint,
		error,
		multiline = false,
		value = $bindable(),
		id: idProp,
		class: className = '',
		...rest
	}: Props = $props();

	const uid = $props.id();
	const id = $derived(idProp ?? `input-${uid}`);
	const errorText = $derived(Array.isArray(error) ? error.join(' ') : error);
	const describedBy = $derived(
		[hint && `${id}-hint`, errorText && `${id}-error`].filter(Boolean).join(' ') || undefined
	);
</script>

<div class="field {className}">
	{#if label}<label class="label" for={id}>{label}</label>{/if}

	{#if multiline}
		<textarea
			{id}
			class="control control--multiline"
			aria-invalid={errorText ? 'true' : undefined}
			aria-describedby={describedBy}
			bind:value
			{...rest as HTMLTextareaAttributes}
		></textarea>
	{:else}
		<input
			{id}
			class="control"
			aria-invalid={errorText ? 'true' : undefined}
			aria-describedby={describedBy}
			bind:value
			{...rest as HTMLInputAttributes}
		/>
	{/if}

	{#if hint}<span class="hint" id="{id}-hint">{hint}</span>{/if}
	{#if errorText}<span class="error" id="{id}-error" role="alert">{errorText}</span>{/if}
</div>

<style>
	.field {
		display: grid;
		gap: var(--space-2);
		font-family: var(--font-body);
	}
	.label {
		font-weight: var(--weight-bold);
		font-size: var(--text-sm);
		color: var(--text-strong);
	}
	.hint {
		font-size: var(--text-xs);
		color: var(--ink-600);
	}
	.error {
		font-size: var(--text-sm);
		font-weight: var(--weight-semibold);
		color: var(--ink-900);
	}
	.error::before {
		content: '';
		display: inline-block;
		width: 0.6em;
		height: 0.6em;
		margin-inline-end: 0.4em;
		border-radius: 50%;
		background: var(--color-danger);
	}

	.control {
		font-family: var(--font-body);
		font-size: var(--text-md);
		color: var(--text-strong);
		height: var(--control-md);
		padding: 0 var(--space-4);
		background: var(--white);
		border: 2px solid var(--border-strong);
		border-radius: var(--radius-md);
		width: 100%;
		-webkit-appearance: none;
		appearance: none;
		transition:
			border-color var(--dur-fast) var(--ease-out),
			box-shadow var(--dur-fast) var(--ease-out);
	}
	.control--multiline {
		height: auto;
		min-height: 96px;
		padding: var(--space-3) var(--space-4);
		line-height: var(--leading-normal);
		resize: vertical;
	}
	.control::placeholder {
		color: var(--text-faint);
	}
	.control:hover {
		border-color: var(--green-400);
	}
	.control:focus {
		outline: none;
		border-color: var(--border-focus);
		box-shadow: var(--ring);
	}
	.control[aria-invalid='true'] {
		border-color: var(--color-danger);
	}
	.control:disabled {
		opacity: 0.55;
		cursor: not-allowed;
		background: var(--surface-inset);
	}
</style>
