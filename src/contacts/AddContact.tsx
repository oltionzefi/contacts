import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';

const AddContactComponent = (props: WithTranslation) => {
	const { t } = props;
	return <div>{t('contacts.add_contact.placeholder')}</div>;
};

export const AddContact = withTranslation()(AddContactComponent);
