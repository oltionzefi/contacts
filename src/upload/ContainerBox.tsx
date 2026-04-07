import React from 'react';
import { useTranslation } from 'react-i18next';
import { DropTargetMonitor, useDrop } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';

export interface TargetBoxProps {
	onDrop: (props: TargetBoxProps, monitor: DropTargetMonitor) => void;
	uplaodData: (item: any) => void;
}

export const ContainerBox: React.FC<TargetBoxProps> = (props) => {
	const { t } = useTranslation();
	const { onDrop, uplaodData } = props;
	const [{ canDrop, isOver }, drop] = useDrop({
		accept: [NativeTypes.FILE],
		drop(item, monitor) {
			if (onDrop) {
				onDrop(props, monitor);
			}
			if (item) {
				uplaodData(item);
			}
		},
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
	});

	const isActive = canDrop && isOver;

	const dropClass = [
		'drop-zone',
		isActive ? 'is-active' : canDrop ? 'can-drop' : '',
	]
		.filter(Boolean)
		.join(' ');

	return (
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		<div ref={drop as any} className={dropClass}>
			{isActive
				? t('contacts.upload.release.action')
				: t('contacts.upload.drag.action')}
		</div>
	);
};
