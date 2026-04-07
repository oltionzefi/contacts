import { render } from '@testing-library/react';
import { Container } from './Container';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

describe('Upload Container', () => {
	it('renders upload container without crashing', () => {
		const { container } = render(
			<DndProvider backend={HTML5Backend}>
				<Container />
			</DndProvider>,
		);
		expect(container).toBeInTheDocument();
	});
});
