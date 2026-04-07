import { render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
	it('renders sidebar', () => {
		render(<Sidebar />);
		expect(
			screen.getByText('contacts.sidebar.placeholder'),
		).toBeInTheDocument();
	});
});
