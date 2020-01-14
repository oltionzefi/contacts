import React from 'react';
import { useTranslation } from 'react-i18next';

export const Content: React.FC = () => {
	const { t } = useTranslation();
	return <div>{t('contacts.content.placeholder')}</div>;
};
