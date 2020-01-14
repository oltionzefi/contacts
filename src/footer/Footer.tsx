import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
	const { t } = useTranslation();
	return <div>{t('contacts.footer.placeholder')}</div>;
};
