import { render } from '@testing-library/react';
import { Message } from './Message';

describe('Message', () => {
	it('renders success message bar when status is true', () => {
		const { container } = render(<Message status={true} />);
		expect(container).toBeInTheDocument();
	});

	it('renders error message bar when status is false', () => {
		const { container } = render(<Message status={false} />);
		expect(container).toBeInTheDocument();
	});
});
