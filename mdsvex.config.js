import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { join } from 'path'

const defaultLayout = join(import.meta.dirname, './src/lib/layouts/default.svelte')

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

  layout: {
    _: defaultLayout
  },

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
