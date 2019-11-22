import { Contact } from './contact.model';
import { EntityStore, EntityState, StoreConfig } from '@datorama/akita';

export interface ContactsState extends EntityState<Contact> {}

const initialState = {};

@StoreConfig({ name: 'contacts' })
export class ContactsStore extends EntityStore<ContactsState, Contact> {
	constructor() {
		super(initialState);
	}
}

export const contactsStore = new ContactsStore();
