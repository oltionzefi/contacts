import React from 'react';
import { useTranslation } from 'react-i18next';

export const Sidebar: React.FC = () => {
	const { t } = useTranslation();
	return <>{t('contacts.sidebar.placeholder')}</>;
};
