import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';

const ContentComponent = (props: WithTranslation) => {
	const { t } = props;
	return <div>{t('contact.content.placeholder')}</div>;
};

export const Content = withTranslation()(ContentComponent);
