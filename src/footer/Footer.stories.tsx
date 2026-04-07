import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
	title: 'Layout/Footer',
	component: Footer,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component:
					'App footer bar — currently shows a translated placeholder.',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
