import type { Meta, StoryObj } from '@storybook/react';
import { FileList } from './FileList';

const meta: Meta<typeof FileList> = {
	title: 'Upload/File List',
	component: FileList,
	tags: ['autodocs'],
	argTypes: {
		files: { control: false },
	},
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component:
					'Displays the list of files selected or dropped for upload. Shows an empty-state message when no files are present.',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/** No files selected yet. */
export const Empty: Story = {
	name: 'Empty',
	args: { files: [] },
	parameters: {
		docs: {
			description: { story: 'Shows "Nothing to display" placeholder.' },
		},
	},
};

/** Files ready to upload. */
export const WithFiles: Story = {
	name: 'With Files',
	args: {
		files: [
			new File([''], 'contacts-export.xlsx', {
				type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
			}),
			new File([''], 'backup-2024.csv', { type: 'text/csv' }),
		],
	},
	parameters: {
		docs: {
			description: {
				story: 'Shows name, size and MIME type of each file.',
			},
		},
	},
};

/** Single large file. */
export const SingleFile: Story = {
	name: 'Single File',
	args: {
		files: [
			new File([new ArrayBuffer(2048000)], 'team-contacts.xlsx', {
				type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
			}),
		],
	},
};
