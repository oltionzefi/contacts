import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

const FooterComponent = (props: WithTranslation) => {
	const { t } = props;
	return <div>{t('contacts.footer.placeholder')}</div>;
};

export const Footer = withTranslation()(FooterComponent);
