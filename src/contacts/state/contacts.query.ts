import { QueryEntity } from '@datorama/akita';
import { Contact } from './contact.model';
import { map } from 'rxjs/operators';
import { ContactsStore, contactsStore, ContactsState } from './contacts.store';

export class ContactsQuery extends QueryEntity<ContactsState, Contact> {
	selectContacts$ = this.selectAll().pipe(map(contact => this.getActiveContacts(contact)));

	constructor(protected store: ContactsStore) {
		super(store);
	}

	private getActiveContacts(contacts: Contact[]): Contact[] {
		return contacts.filter(t => !t.deleted);
	}
}

export const contactsQuery = new ContactsQuery(contactsStore);
