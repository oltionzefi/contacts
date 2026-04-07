import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from './styles';
import { Container } from './Container';
import { Label } from '@fluentui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const Upload: React.FC = () => {
	const { t } = useTranslation();
	return (
		<>
			<div className={classNames.upload}>
				<DndProvider backend={HTML5Backend}>
					<div>
						<Label>{t('contacts.upload.description')}</Label>
					</div>
					<div>
						<Container />
					</div>
				</DndProvider>
			</div>
		</>
	);
};
