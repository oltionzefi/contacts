import { render } from '@testing-library/react';
import { Upload } from './Upload';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

describe('Upload', () => {
	it('renders upload without crashing', () => {
		const { container } = render(
			<DndProvider backend={HTML5Backend}>
				<Upload />
			</DndProvider>
		);
		expect(container).toBeInTheDocument();
	});
});
