import { ContactsStore, contactsStore } from './contacts.store';
import { Contact, createContact } from './contact.model';
import { ID } from '@datorama/akita';

export class ContactsService {
	constructor(private readonly contactsStore: ContactsStore) {}

	add(contact: Contact) {
		const contactData = createContact(contact);
		this.contactsStore.add(contactData);
	}

	delete(id: ID) {
		this.contactsStore.remove(id);
	}
}

export const contactsService = new ContactsService(contactsStore);
