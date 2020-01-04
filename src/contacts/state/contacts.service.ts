import { ContactsStore, contactsStore } from './contacts.store';
import { Contact, createContact, getContactData } from './contact.model';
import { ID } from '@datorama/akita';

export class ContactsService {
	constructor(private readonly contactsStore: ContactsStore) {}

	add(contact: Contact) {
		const contactData = createContact(contact);
		this.contactsStore.add(contactData);
	}

	update(contactId: string | number | undefined, contact: Contact) {
		this.contactsStore.update(contactId, getContactData(contact));
	}

	delete(id: ID) {
		this.contactsStore.remove(id);
	}
}

export const contactsService = new ContactsService(contactsStore);
