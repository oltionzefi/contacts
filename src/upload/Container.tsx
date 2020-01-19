import React, { useCallback, useState } from 'react';
import { DropTargetMonitor } from 'react-dnd';
import { FileList } from './FileList';
import { ContainerBox } from './ContainerBox';

export const Container: React.FC = () => {
	const [droppedFiles, setDroppedFiles] = useState<File[]>([]);

	const handleFileDrop = useCallback((item: any, monitor: DropTargetMonitor) => {
		if (monitor) {
			const files = monitor.getItem().files;
			setDroppedFiles(files);
		}
	}, []);

	return (
		<>
			<ContainerBox onDrop={handleFileDrop} />
			<FileList files={droppedFiles} />
		</>
	);
};
