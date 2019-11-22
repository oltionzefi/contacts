import { ID, guid } from '@datorama/akita';

export type Contact = {
	ID?: ID;
	firstname: string;
	lastname: string;
	email: string;
	company?: string;
	phoneNumber: string;
	address?: string;
	picture?: string;
	deleted: boolean;
};

export function createContact(contact: Contact) {
	return {
		id: guid(),
		firstname: contact.firstname,
		lastname: contact.lastname,
		email: contact.email,
		company: contact.company,
		phoneNumber: contact.phoneNumber,
		address: contact.address,
		picture: contact.picture,
		deleted: false
	};
}
