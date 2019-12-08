import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';

const UploadComponent = (props: WithTranslation) => {
	const { t } = props;
	return <div>{t('contacts.upload.placeholder')}</div>;
};

export const Upload = withTranslation()(UploadComponent);
