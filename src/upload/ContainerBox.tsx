import React from 'react';
import { useTranslation } from 'react-i18next';
import { DropTargetMonitor, useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import { darkGreenBackground, darkKhakiBackground, backgroud } from './styles';

export interface TargetBoxProps {
	onDrop: (props: TargetBoxProps, monitor: DropTargetMonitor) => void;
}

export const ContainerBox: React.FC<TargetBoxProps> = props => {
	const { t } = useTranslation();
	const { onDrop } = props;
	const [{ canDrop, isOver }, drop] = useDrop({
		accept: [NativeTypes.FILE],
		drop(item, monitor) {
			if (onDrop) {
				onDrop(props, monitor);
			}
		},
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

	return (
		<div ref={drop} style={{ backgroundColor }}>
			{isActive ? t('contacts.upload.release.action') : t('contacts.upload.drag.action')}
		</div>
	);
};
