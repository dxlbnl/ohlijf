<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Input from './Input.svelte';

	const { Story } = defineMeta({
		title: 'Design system/Input',
		component: Input,
		args: { label: 'E-mailadres', type: 'email', placeholder: 'jij@voorbeeld.nl' }
	});
</script>

<Story name="Default" />
<Story name="With hint" args={{ hint: 'We sturen je nooit spam.' }} />
<Story name="Error" args={{ value: 'geen-email', error: 'Vul een geldig e-mailadres in.' }} />
<Story
	name="Multiline"
	args={{ label: 'Bericht', type: undefined, multiline: true, placeholder: 'Vertel het ons…' }}
/>
<Story name="Disabled" args={{ disabled: true }} />
