/**
 * Shared mock data for Storybook stories.
 */
import type { Contact } from '../contacts/state/contact.model';

export const mockContact: Contact = {
	id: 'contact-1',
	firstname: 'Alex',
	lastname: 'Fernando',
	email: 'alex.fernando@example.com',
	phoneNumber: '+1 555 123 4567',
	company: 'Acme Corp',
	address: '123 Main St, San Francisco, CA',
	deleted: false,
};

export const mockContactWithPicture: Contact = {
	id: 'contact-2',
	firstname: 'Sarah',
	lastname: 'Chen',
	email: 'sarah.chen@techcorp.io',
	phoneNumber: '+1 555 987 6543',
	company: 'TechCorp',
	picture: 'https://i.pravatar.cc/150?img=47',
	deleted: false,
};

export const mockContacts: Contact[] = [
	mockContact,
	mockContactWithPicture,
	{
		id: 'contact-3',
		firstname: 'Marcus',
		lastname: 'Johnson',
		email: 'marcus.j@inbox.dev',
		phoneNumber: '+44 20 7946 0958',
		company: 'BuildFast Ltd',
		deleted: false,
	},
	{
		id: 'contact-4',
		firstname: 'Priya',
		lastname: 'Sharma',
		email: 'priya@designstudio.com',
		phoneNumber: '+49 30 901820',
		address: 'Mitte, Berlin',
		deleted: false,
	},
	{
		id: 'contact-5',
		firstname: 'Lucas',
		lastname: 'Müller',
		email: 'lucas.mueller@firma.de',
		phoneNumber: '+49 89 123456',
		company: 'Müller GmbH',
		deleted: false,
	},
	{
		id: 'contact-6',
		firstname: 'Emma',
		lastname: 'Novak',
		email: 'emma.novak@mail.cz',
		phoneNumber: '+420 601 111 222',
		deleted: false,
	},
];
