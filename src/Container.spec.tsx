import { render, screen } from '@testing-library/react';
import { Container } from './Container';

describe('Container', () => {
	it('renders without crashing', () => {
		const { container } = render(<Container />);
		expect(container).toBeInTheDocument();
	});

	it('renders children', () => {
		render(
			<Container>
				<span>child content</span>
			</Container>,
		);
		expect(screen.getByText('child content')).toBeInTheDocument();
	});
});
