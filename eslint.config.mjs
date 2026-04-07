import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default tseslint.config(
	// Base JS recommended rules
	js.configs.recommended,

	// TypeScript recommended rules
	...tseslint.configs.recommended,

	// Global settings for all TS/TSX files
	{
		files: ['src/**/*.{ts,tsx}'],
		plugins: {
			'react-hooks': reactHooks,
			'jsx-a11y': jsxA11y,
		},
		rules: {
			// React Hooks
			...reactHooks.configs.recommended.rules,

			// Accessibility
			...jsxA11y.configs.recommended.rules,

			// TypeScript — relax rules that are too noisy for this codebase
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
			'@typescript-eslint/no-require-imports': 'warn',

			// General
			'no-console': ['warn', { allow: ['warn', 'error'] }],
		},
	},

	// Storybook story files — relax rules
	{
		files: ['src/**/*.stories.{ts,tsx}', '.storybook/**/*.{ts,tsx}'],
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
		},
	},

	// Ignore build output and generated files
	{
		ignores: ['build/', 'build-wc/', '.dist/', 'node_modules/', 'coverage/', 'public/'],
	},
);
