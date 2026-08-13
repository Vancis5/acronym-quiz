import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		port: 2000
	},
	preview: {
		port: 2000
	},
	plugins: [sveltekit()]
});
