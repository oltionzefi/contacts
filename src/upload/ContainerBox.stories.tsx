import type { ComponentType } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ContainerBox } from './ContainerBox';

const withDnd = (Story: ComponentType) => (
	<DndProvider backend={HTML5Backend}>
		<Story />
	</DndProvider>
);

const meta: Meta<typeof ContainerBox> = {
	title: 'Upload/Drop Zone',
	component: ContainerBox,
	tags: ['autodocs'],
	decorators: [withDnd],
	args: {
		onDrop: () => {},
		uplaodData: () => {},
	},
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component:
					'Drag-and-drop target zone (react-dnd). Shows "Drag a file here" normally, and "Release to drop" when a file is dragged over it.',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

/** Default idle state — waiting for a file drag. */
export const Default: Story = {
	name: 'Idle',
	parameters: {
		docs: {
			description: {
				story: 'Drop zone in idle state. Drag a file over it to see the active state.',
			},
		},
	},
};

/** Simulates the visual style when a valid file is being dragged over the zone. */
export const CanDropStyle: Story = {
	name: 'Can Drop (CSS demo)',
	decorators: [
		(Story) => (
			<DndProvider backend={HTML5Backend}>
				<div className="drop-zone can-drop" style={{ cursor: 'copy' }}>
					Drag a file here
				</div>
			</DndProvider>
		),
	],
	parameters: {
		docs: {
			description: {
				story: 'CSS class `can-drop` — applied when a compatible file is in the drag payload.',
			},
		},
	},
};

/** Simulates the visual style when a file is hovering directly over the drop zone. */
export const ActiveDropStyle: Story = {
	name: 'Active Drop (CSS demo)',
	decorators: [
		() => (
			<DndProvider backend={HTML5Backend}>
				<div className="drop-zone is-active">Release to drop</div>
			</DndProvider>
		),
	],
	parameters: {
		docs: {
			description: {
				story: 'CSS class `is-active` — applied when the file is directly over the drop area.',
			},
		},
	},
};
