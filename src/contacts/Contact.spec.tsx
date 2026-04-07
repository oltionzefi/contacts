import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Contact } from './Contact';
import { Contact as Model } from './state';

describe('Contact', () => {
	const contactMock: Model = {
		id: 'b2931f4bb4',
		firstname: 'Alex',
		lastname: 'Fernando',
		email: 'alex.fernando@fake.com',
		phoneNumber: '+213123',
		deleted: false,
	};

	const renderContact = (contact?: Model) =>
		render(
			<MemoryRouter>
				<Contact contact={contact} />
			</MemoryRouter>,
		);

	it('renders contact form fields', () => {
		renderContact(contactMock);
		expect(
			screen.getByLabelText('contacts.contacts.firstname'),
		).toBeInTheDocument();
		expect(
			screen.getByLabelText('contacts.contacts.lastname'),
		).toBeInTheDocument();
		expect(
			screen.getByLabelText('contacts.contacts.email'),
		).toBeInTheDocument();
	});

	it('renders submit button', () => {
		renderContact(contactMock);
		expect(
			screen.getByRole('button', { name: 'contacts.contacts.submit' }),
		).toBeInTheDocument();
	});

	it('populates fields with existing contact values', () => {
		renderContact(contactMock);
		expect(
			screen.getByLabelText('contacts.contacts.firstname'),
		).toHaveValue('Alex');
		expect(screen.getByLabelText('contacts.contacts.lastname')).toHaveValue(
			'Fernando',
		);
	});

	it('renders close button only on new form (no contact prop)', () => {
		renderContact(); // new form — no contact passed
		expect(
			screen.getByLabelText('contacts.menu.main.close'),
		).toBeInTheDocument();
	});

	it('does not render close button on edit form', () => {
		renderContact(contactMock); // edit form — contact passed
		expect(
			screen.queryByLabelText('contacts.menu.main.close'),
		).not.toBeInTheDocument();
	});
});
