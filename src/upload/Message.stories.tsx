import type { Meta, StoryObj } from '@storybook/react';
import { Message } from './Message';

const meta: Meta<typeof Message> = {
	title: 'Upload/Message',
	component: Message,
	tags: ['autodocs'],
	argTypes: {
		status: {
			control: 'boolean',
			description: '`true` = success banner, `false` = error banner.',
		},
	},
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component:
					'FluentUI MessageBar shown after a file upload attempt — success (green) or error (red).',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/** File uploaded successfully. */
export const UploadSuccess: Story = {
	name: 'Success',
	args: { status: true },
};

/** File upload failed. */
export const UploadError: Story = {
	name: 'Error',
	args: { status: false },
};
