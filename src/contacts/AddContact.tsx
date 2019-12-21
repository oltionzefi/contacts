import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';

const AddContactComponent = (props: WithTranslation) => {
	const { t } = props;
	return <div className="AddContacts">{t('contacts.contacts.add-contact')}</div>;
};

export const AddContact = withTranslation()(AddContactComponent);
