/**
 * Vite config for building the Contacts app as a self-contained web component.
 *
 * Output: build-wc/contacts-app.iife.js
 *
 * Usage in any HTML page:
 *   <script src="contacts-app.iife.js"></script>
 *   <contacts-app style="height: 100vh; width: 100%;"></contacts-app>
 */
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: { '@': path.resolve(__dirname, 'src') },
	},
	build: {
		outDir: 'build-wc',
		lib: {
			entry: path.resolve(__dirname, 'src/web-component.ts'),
			name: 'ContactsApp',
			fileName: 'contacts-app',
			formats: ['iife'],
		},
		// Bundle everything — no externals, fully self-contained
		rollupOptions: {
			external: [],
		},
	},
});
