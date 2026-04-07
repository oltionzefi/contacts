import type { Meta, StoryObj } from '@storybook/react';
import { Contact } from './Contact';
import { mockContact } from '../stories/mocks';

const meta: Meta<typeof Contact> = {
	title: 'Contacts/Contact Form',
	component: Contact,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'Contact form used for both creating new contacts (shows close button) and editing existing ones (no close button — parent ContactItem handles that).',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/** New contact form — rendered at /new route. Shows a close (×) button. */
export const NewContact: Story = {
	name: 'New Contact',
	args: {},
	parameters: {
		docs: {
			description: {
				story: 'No `contact` prop → new form. Close button navigates back.',
			},
		},
	},
};

/** Edit form — pre-filled with existing contact data. No close button (parent handles it). */
export const EditContact: Story = {
	name: 'Edit Contact',
	args: { contact: mockContact },
	parameters: {
		docs: {
			description: {
				story: 'With `contact` prop → edit form. Fields are pre-populated.',
			},
		},
	},
};

/** Edit form with a contact that has all optional fields filled */
export const EditContactFull: Story = {
	name: 'Edit Contact (all fields)',
	args: {
		contact: {
			id: 'contact-full',
			firstname: 'Sarah',
			lastname: 'Chen',
			email: 'sarah.chen@techcorp.io',
			phoneNumber: '+1 555 987 6543',
			company: 'TechCorp Inc.',
			address: '456 Market St, New York, NY 10001',
			picture: 'https://i.pravatar.cc/150?img=47',
			deleted: false,
		},
	},
};
