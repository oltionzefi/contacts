import React, { useState, useEffect, FormEvent } from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { Contact, contactsQuery } from './state';
import { ContactItem } from './ContactItem';
import { Label, TextField, Announced } from 'office-ui-fabric-react';
import { classNames, controlStyles } from './styles';

export const useContacts = () => {
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

	const onChangeFilterName = (
		event: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
		text: string | undefined
	): void => {
		setFilterName(text);
	};

	return {
		contacts,
		filterName,
		onChangeFilterName
	};
};

const ContactsComponent: React.SFC<WithTranslation> = (props: WithTranslation) => {
	const { t } = props;
	const { contacts, filterName, onChangeFilterName } = useContacts();

	const contactsItems = contacts.map((contact: Contact) => {
		return (
			<ContactItem
				key={contact.id}
				contact={contact}
				i18n={props.i18n}
				t={t}
				tReady={props.tReady}
			/>
		);
	});

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
