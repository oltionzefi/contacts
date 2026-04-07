import { useContactsStore } from './contacts.store';
import { Contact, ContactID } from './contact.model';

/** Service wrapping the Zustand contacts store for component-level access. */
export const contactsService = {
	add: (contact: Contact) => useContactsStore.getState().add(contact),
	update: (id: ContactID | string | number | undefined, contact: Contact) =>
		useContactsStore.getState().update(id, contact),
	delete: (id: ContactID) => useContactsStore.getState().remove(id),
};
