import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
	Contact,
	ContactID,
	createContact,
	getContactData,
} from './contact.model';

interface ContactsState {
	contacts: Contact[];
	add: (contact: Contact) => void;
	update: (
		id: ContactID | string | number | undefined,
		contact: Contact
	) => void;
	remove: (id: ContactID) => void;
	getActiveContacts: () => Contact[];
}

export const useContactsStore = create<ContactsState>()(
	persist(
		(set, get) => ({
			contacts: [],
			add: (contact: Contact) =>
				set((state) => ({
					contacts: [...state.contacts, createContact(contact)],
				})),
			update: (id, contact) =>
				set((state) => ({
					contacts: state.contacts.map((c) =>
						c.id === String(id)
							? { ...c, ...getContactData(contact) }
							: c
					),
				})),
			remove: (id: ContactID) =>
				set((state) => ({
					contacts: state.contacts.map((c) =>
						c.id === id ? { ...c, deleted: true } : c
					),
				})),
			getActiveContacts: () => get().contacts.filter((c) => !c.deleted),
		}),
		{ name: 'contacts' }
	)
);
