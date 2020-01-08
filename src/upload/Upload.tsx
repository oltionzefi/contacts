import React from 'react';
import { WithTranslation, withTranslation } from 'react-i18next';
import { classNames } from './styles';
import { UploadContainer } from './UploadContainer';
import { Label } from 'office-ui-fabric-react';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

const UploadComponent = (props: WithTranslation) => {
	const { t } = props;
	return (
		<div className={classNames.upload}>
			<DndProvider backend={Backend}>
				<div>
					<Label>{t('contacts.upload.description')}</Label>
				</div>
				<div>
					<UploadContainer />
				</div>
			</DndProvider>
		</div>
	);
};

export const Upload = withTranslation()(UploadComponent);
