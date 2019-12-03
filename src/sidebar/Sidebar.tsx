import React from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

const SidebarComponent = (props: WithTranslation) => {
	const { t } = props;
	return <div>{t('contact.sidebar.placeholder')}</div>;
};

export const Sidebar = withTranslation()(SidebarComponent);
