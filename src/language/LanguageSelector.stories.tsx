import type { Meta, StoryObj } from '@storybook/react';
import { LanguageSelector } from './LanguageSelector';

const meta: Meta<typeof LanguageSelector> = {
	title: 'Layout/Language Selector',
	component: LanguageSelector,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'Dropdown selector for the app UI language. Persists the selection to localStorage via Zustand. Supported: English, German, French, Spanish, Italian.',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Change the language to see all translations update instantly.',
			},
		},
	},
};
