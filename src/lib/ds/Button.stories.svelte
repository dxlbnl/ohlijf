<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ComponentProps } from 'svelte';
	import Button from './Button.svelte';

	const { Story } = defineMeta({
		title: 'Design system/Button',
		component: Button,
		args: { variant: 'primary', size: 'md', block: false, disabled: false },
		argTypes: {
			variant: { control: 'select', options: ['primary', 'secondary', 'ghost', 'pop'] },
			size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] }
		}
	});
</script>

{#snippet template(args: ComponentProps<typeof Button>)}
	<Button {...args}>Aanmelden</Button>
{/snippet}

<Story name="Primary" {template} />
<Story name="Secondary" args={{ variant: 'secondary' }} {template} />
<Story name="Ghost" args={{ variant: 'ghost' }} {template} />
<Story name="Pop (game piece)" args={{ variant: 'pop', size: 'lg' }} {template} />
<Story name="Pop peach" args={{ variant: 'pop', popColor: 'var(--peach-600)' }} {template} />
<Story name="As link" args={{ href: '#', variant: 'secondary' }} {template} />
<Story name="Disabled" args={{ disabled: true }} {template} />
