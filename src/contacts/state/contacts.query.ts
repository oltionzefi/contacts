import { QueryEntity } from '@datorama/akita';
import { combineLatest } from 'rxjs';
import { Contact } from './contact.model';
import { ContactsStore, contactsStore, ContactsState } from './contacts.store';

export class ContactsQuery extends QueryEntity<ContactsState, Contact> {}
