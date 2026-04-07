import type { Meta, StoryObj } from '@storybook/react';
import { Contacts } from './Contacts';
import { useContactsStore } from './state';
import { useSelectionStore } from './state';
import { mockContacts } from '../stories/mocks';

const meta: Meta<typeof Contacts> = {
	title: 'Contacts/Contacts List',
	component: Contacts,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component:
					'Full contacts list page with search/filter, list/grid view toggle, infinite scroll (20 per page), and selection.',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Empty state — no contacts in the store. */
export const Empty: Story = {
	name: 'Empty State',
	decorators: [
		(Story) => {
			useContactsStore.setState({ contacts: [] });
			useSelectionStore.setState({ selectedIds: [] });
			return (
				<div style={{ padding: 24 }}>
					<Story />
				</div>
			);
		},
	],
	parameters: {
		docs: {
			description: {
				story: 'Shows the "No contacts yet" empty state with a helpful message.',
			},
		},
	},
};

/** List view with contacts. */
export const ListViewWithContacts: Story = {
	name: 'List View',
	decorators: [
		(Story) => {
			useContactsStore.setState({ contacts: mockContacts });
			useSelectionStore.setState({ selectedIds: [] });
			return (
				<div style={{ padding: 24 }}>
					<Story />
				</div>
			);
		},
	],
};

/** Grid view with contacts. */
export const GridViewWithContacts: Story = {
	name: 'Grid View',
	decorators: [
		(Story) => {
			useContactsStore.setState({ contacts: mockContacts });
			useSelectionStore.setState({ selectedIds: [] });
			return (
				<div style={{ padding: 24 }}>
					<Story />
				</div>
			);
		},
	],
	parameters: {
		docs: {
			description: {
				story: 'Click the grid toggle icon to switch to grid view. Cards are uniform height.',
			},
		},
	},
};

/** List view with some contacts pre-selected — toolbar actions become enabled. */
export const WithSelections: Story = {
	name: 'With Selections',
	decorators: [
		(Story) => {
			useContactsStore.setState({ contacts: mockContacts });
			useSelectionStore.setState({
				selectedIds: ['contact-1', 'contact-3'],
			});
			return (
				<div style={{ padding: 24 }}>
					<Story />
				</div>
			);
		},
	],
	parameters: {
		docs: {
			description: {
				story: 'Two contacts pre-selected — checkboxes checked, cards highlighted.',
			},
		},
	},
};

/** Infinite scroll demo — 25 contacts loads 20 then 5 more on scroll. */
export const InfiniteScroll: Story = {
	name: 'Infinite Scroll (25 contacts)',
	decorators: [
		(Story) => {
			// Generate 25 contacts to trigger infinite scroll
			const many = Array.from({ length: 25 }, (_, i) => ({
				id: `gen-${i}`,
				firstname: `User`,
				lastname: `#${i + 1}`,
				email: `user${i + 1}@example.com`,
				phoneNumber: `+1 555 ${String(i).padStart(3, '0')} 0000`,
				deleted: false,
			}));
			useContactsStore.setState({ contacts: many });
			useSelectionStore.setState({ selectedIds: [] });
			return (
				<div style={{ padding: 24, height: 500, overflow: 'auto' }}>
					<Story />
				</div>
			);
		},
	],
	parameters: {
		docs: {
			description: {
				story: 'Scroll to the bottom to load the remaining contacts (first 20 shown, then +5).',
			},
		},
	},
};
