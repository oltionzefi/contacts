import type { Meta, StoryObj } from '@storybook/react';
import { ContactItem } from './ContactItem';
import { useSelectionStore } from './state';
import { mockContact, mockContactWithPicture } from '../stories/mocks';

const meta: Meta<typeof ContactItem> = {
	title: 'Contacts/Contact Item',
	component: ContactItem,
	tags: ['autodocs'],
	argTypes: {
		viewMode: {
			control: 'radio',
			options: ['list', 'grid'],
		},
	},
	parameters: {
		docs: {
			description: {
				component:
					'A single contact row (list view) or card (grid view). Supports selection via checkbox and inline edit mode.',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

// ─── List View ────────────────────────────────────────────────────────────────

export const ListDefault: Story = {
	name: 'List — Default',
	args: { contact: mockContact, viewMode: 'list' },
	decorators: [
		(Story) => {
			useSelectionStore.setState({ selectedIds: [] });
			return <Story />;
		},
	],
};

export const ListSelected: Story = {
	name: 'List — Selected',
	args: { contact: mockContact, viewMode: 'list' },
	decorators: [
		(Story) => {
			useSelectionStore.setState({
				selectedIds: [mockContact.id as string],
			});
			return <Story />;
		},
	],
	parameters: {
		docs: {
			description: {
				story: 'Card gets blue border + tinted background when selected.',
			},
		},
	},
};

export const ListWithPicture: Story = {
	name: 'List — With Avatar',
	args: { contact: mockContactWithPicture, viewMode: 'list' },
	decorators: [
		(Story) => {
			useSelectionStore.setState({ selectedIds: [] });
			return <Story />;
		},
	],
	parameters: {
		docs: {
			description: {
				story: 'Shows a real avatar image instead of initials.',
			},
		},
	},
};

export const ListMinimal: Story = {
	name: 'List — Minimal (no company/address)',
	args: {
		contact: {
			id: 'minimal',
			firstname: 'Emma',
			lastname: 'Novak',
			email: 'emma@mail.cz',
			phoneNumber: '+420 601 111 222',
			deleted: false,
		},
		viewMode: 'list',
	},
	decorators: [
		(Story) => {
			useSelectionStore.setState({ selectedIds: [] });
			return <Story />;
		},
	],
};

// ─── Grid View ────────────────────────────────────────────────────────────────

export const GridDefault: Story = {
	name: 'Grid — Default',
	args: { contact: mockContact, viewMode: 'grid' },
	decorators: [
		(Story) => {
			useSelectionStore.setState({ selectedIds: [] });
			return <Story />;
		},
	],
	parameters: { layout: 'centered' },
};

export const GridSelected: Story = {
	name: 'Grid — Selected',
	args: { contact: mockContact, viewMode: 'grid' },
	decorators: [
		(Story) => {
			useSelectionStore.setState({
				selectedIds: [mockContact.id as string],
			});
			return <Story />;
		},
	],
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				story: 'Grid card with selection state — blue border + checkbox checked.',
			},
		},
	},
};

export const GridWithPicture: Story = {
	name: 'Grid — With Avatar',
	args: { contact: mockContactWithPicture, viewMode: 'grid' },
	decorators: [
		(Story) => {
			useSelectionStore.setState({ selectedIds: [] });
			return <Story />;
		},
	],
	parameters: { layout: 'centered' },
};
