import { render } from '@testing-library/react';
import { Contacts } from './Contacts';

describe('Contacts', () => {
	it('renders contacts without crashing', () => {
		const { container } = render(<Contacts />);
		expect(container).toBeInTheDocument();
	});
});
