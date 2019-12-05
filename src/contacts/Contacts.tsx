import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';

const ContactsComponent = (props: WithTranslation) => {
	const { t } = props;
	return <div>{t('contacts.contacts.placeholder')}</div>;
};

export const Contacts = withTranslation()(ContactsComponent);
