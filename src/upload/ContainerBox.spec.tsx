import { render, screen } from '@testing-library/react';
import { ContainerBox } from './ContainerBox';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

describe('Upload ContainerBox', () => {
	it('renders drop zone text', () => {
		const onDrop = vi.fn();
		const onUpload = vi.fn();

		render(
			<DndProvider backend={HTML5Backend}>
				<ContainerBox onDrop={onDrop} uplaodData={onUpload} />
			</DndProvider>
		);
		expect(
			screen.getByText('contacts.upload.drag.action')
		).toBeInTheDocument();
	});
});
