import React, { useState, useEffect } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { Contact, contactsQuery } from './state';
import { ContactItem } from './ContactItem';
import { Label } from 'office-ui-fabric-react/lib/Label';

const ContactsComponent: React.FC<WithTranslation> = (props: WithTranslation) => {
	const { t } = props;
	const [contacts, setContacts] = useState<Contact[]>([]);

	useEffect(() => {
		let didCancel = false;
		async function fetchData() {
			const result = getContacts();
			if (!didCancel) {
				setContacts(result);
			}
		}

		fetchData();
		return () => {
			didCancel = true;
		};
	}, []);

	const getContacts = (): Contact[] => {
		let data: Contact[] = [];
		contactsQuery.selectContacts$.subscribe((contact: Contact[]) => (data = contact));

		return data;
	};

	const contactsItems = contacts.map((contact: Contact) => {
		return <ContactItem key={contact.id} contact={contact} tFunction={t} />;
	});

	return (
		<div>
			<Label>{t('contacts.contacts.placeholder')}</Label>
			<div className="collection">{contactsItems}</div>
		</div>
	);
};

export const Contacts = withTranslation()(ContactsComponent);
