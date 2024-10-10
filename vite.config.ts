import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
			autoInstall: true,
			iconCustomizer(collection, icon, props) {
				props.width = '1.2em'
				props.height = '1.2em'
			}
		}),
	],
	server: {
		fs: {
			// Allow access to files from the project root.
			allow: ['..']
		}
	}
});
