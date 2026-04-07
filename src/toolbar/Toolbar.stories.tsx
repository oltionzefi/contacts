import type { Meta, StoryObj } from '@storybook/react';
import { Toolbar } from './Toolbar';
import { useSelectionStore } from '../contacts/state';

const meta: Meta<typeof Toolbar> = {
	title: 'Layout/Toolbar',
	component: Toolbar,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component:
					'FluentUI CommandBar toolbar. Share, Download, Move and Copy are disabled until at least one contact is selected.',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Default state — no contacts selected; context actions are disabled. */
export const Default: Story = {
	name: 'Default (no selection)',
	decorators: [
		(Story) => {
			useSelectionStore.setState({ selectedIds: [] });
			return <Story />;
		},
	],
	parameters: {
		docs: {
			description: {
				story: 'Share, Download, Move and Copy show as disabled (greyed out).',
			},
		},
	},
};

/** With contacts selected — context actions become enabled. */
export const WithSelection: Story = {
	name: 'With Selection',
	decorators: [
		(Story) => {
			useSelectionStore.setState({
				selectedIds: ['contact-1', 'contact-2'],
			});
			return <Story />;
		},
	],
	parameters: {
		docs: {
			description: {
				story: '2 contacts selected — Share, Download, Move, Copy are now active.',
			},
		},
	},
};
