import { render, screen } from '@testing-library/react';
import { ContactItem } from './ContactItem';
import { Contact } from './state';

describe('ContactItem', () => {
	const contactMock: Contact = {
		id: 'b2931f4bb4',
		firstname: 'Alex',
		lastname: 'Fernando',
		email: 'alex.fernando@fake.com',
		phoneNumber: '+213123',
		deleted: false,
	};

	it('renders contact name', () => {
		render(<ContactItem contact={contactMock} />);
		expect(screen.getByText('Alex Fernando')).toBeInTheDocument();
	});

	it('renders contact email', () => {
		render(<ContactItem contact={contactMock} />);
		expect(screen.getByText('alex.fernando@fake.com')).toBeInTheDocument();
	});

	it('renders contact phone number', () => {
		render(<ContactItem contact={contactMock} />);
		expect(screen.getByText('+213123')).toBeInTheDocument();
	});
});
