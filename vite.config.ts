import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	server: {
		port: 3000,
		open: true,
	},
	build: {
		outDir: 'build',
	},
	test: {
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./src/setupTests.ts'],
		include: ['src/**/*.{spec,test}.{ts,tsx}'],
		coverage: {
			provider: 'v8',
			reporter: ['text', 'lcov'],
			reportsDirectory: 'coverage',
		},
	},
});
