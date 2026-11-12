import type { Preview } from '@storybook/sveltekit';

// Stories render components from the new design system (src/lib/ds).
import '../src/lib/ds/styles.css';

// Design-system tokens are scoped to .ds, so give the preview body that class.
document.body.classList.add('ds');

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		backgrounds: {
			options: {
				cream: { name: 'Cream', value: '#fbfaf3' },
				white: { name: 'White', value: '#ffffff' },
				dark: { name: 'Dark green', value: '#2a5f21' }
			}
		}
	},
	initialGlobals: { backgrounds: { value: 'cream' } },
	tags: ['autodocs']
};

export default preview;
