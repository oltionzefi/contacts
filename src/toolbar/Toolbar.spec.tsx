import { render } from '@testing-library/react';
import { Toolbar } from './Toolbar';

describe('Toolbar', () => {
	it('renders toolbar without crashing', () => {
		const { container } = render(<Toolbar />);
		expect(container).toBeInTheDocument();
	});
});
