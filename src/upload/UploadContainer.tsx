import React, { ReactNode } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { darkGreenBackground, darkKhakiBackground, backgroud } from './styles';

export const useUpload = () => {
	const [{ canDrop, isOver }, drop] = useDrop({
		drop: () => ({ name: 'File' }),
		accept: ItemTypes.FILE,
		collect: monitor => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		})
	});

	const isActive = canDrop && isOver;
	const backgroundColor = isActive
		? darkGreenBackground
		: canDrop
		? darkKhakiBackground
		: backgroud;

	return {
		drop,
		isActive,
		backgroundColor
	};
};

const UploadContainerComponent: React.SFC<{ children?: ReactNode } & WithTranslation> = (
	props: { children?: ReactNode } & WithTranslation
) => {
	const { t } = props;
	const { drop, isActive, backgroundColor } = useUpload();
	return (
		<div ref={drop} style={{ backgroundColor }}>
			{isActive ? t('contacts.upload.release.action') : t('contacts.upload.drag.action')}
		</div>
	);
};

export const UploadContainer = withTranslation()(UploadContainerComponent);
