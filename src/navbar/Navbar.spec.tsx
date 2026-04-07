import { render } from '@testing-library/react';
import { Navbar } from './Navbar';

describe('Navbar', () => {
	it('renders navbar without crashing', () => {
		const { container } = render(<Navbar />);
		expect(container).toBeInTheDocument();
	});
});
