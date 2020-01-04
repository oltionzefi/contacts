import React, { useState, useEffect, FormEvent } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { Contact, contactsQuery } from './state';
import { ContactItem } from './ContactItem';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Announced } from 'office-ui-fabric-react/lib/Announced';
import { classNames, controlStyles } from './styles';

const ContactsComponent: React.FC<WithTranslation> = (props: WithTranslation) => {
	const { t } = props;
	const [contacts, setContacts] = useState<Contact[]>([]);
	const [filterName, setFilterName] = useState<string | undefined>();

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
		return <ContactItem key={contact.id} contact={contact} />;
	});

	const onChangeFilterName = (
		event: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
		text: string | undefined
	): void => {
		setFilterName(text);
	};

	return (
		<div className={classNames.wrapper}>
			<div className={classNames.header}>
				<Label>{t('contacts.contacts.placeholder')}</Label>
			</div>
			<div>
				<TextField
					label={t('contacts.contacts.filter.name')}
					onChange={onChangeFilterName}
					styles={controlStyles}
					value={filterName}
				/>
				<Announced message={`Number of items after filter applied: ${contacts.length}.`} />
			</div>
			<div className={classNames.collections}>{contactsItems}</div>
		</div>
	);
};

export const Contacts = withTranslation()(ContactsComponent);
