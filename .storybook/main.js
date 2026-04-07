/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
	stories: ['../src/**/*.stories.tsx'],
	addons: ['@storybook/addon-essentials'],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
};

module.exports = config;
