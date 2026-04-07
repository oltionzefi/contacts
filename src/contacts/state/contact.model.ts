import { guid } from '../../utils/guid';

export type ContactID = string;

export type Contact = {
	id?: ContactID;
	firstname: string;
	lastname: string;
	email: string;
	company?: string;
	phoneNumber: string;
	address?: string;
	picture?: string;
	deleted?: boolean;
};

export function getContactData(contact: Contact) {
	return {
		firstname: contact.firstname,
		lastname: contact.lastname,
		email: contact.email,
		company: contact.company,
		phoneNumber: contact.phoneNumber,
		address: contact.address,
		picture: contact.picture,
		deleted: false,
	};
}

export function createContact(contact: Contact): Contact & { id: ContactID } {
	return {
		id: guid(),
		...getContactData(contact),
	};
}
