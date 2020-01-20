import React, { useCallback, useState } from 'react';
import { DropTargetMonitor } from 'react-dnd';
import { FileList } from './FileList';
import { ContainerBox } from './ContainerBox';
import * as XLSX from 'xlsx';
import { Message } from './Message';

export const Container: React.FC = () => {
	const [droppedFiles, setDroppedFiles] = useState<File[]>([]);
	const [uploadStatus, setUploadStatus] = useState<boolean>(false);
	const [openMessageBar, setOpenMessageBar] = useState<boolean>(false);

	const handleFileDrop = useCallback((item: any, monitor: DropTargetMonitor) => {
		if (monitor) {
			const files = monitor.getItem().files;
			setDroppedFiles(files);
		}
	}, []);

	const uplaodData = useCallback((item: any) => {
		item.files.forEach((file: File) => {
			const reader = new FileReader();
			reader.onload = async e => {
				const data = e.target?.result;
				const wb = XLSX.read(data, { type: 'binary' });
				const wsname = wb.SheetNames[0];
				const ws = wb.Sheets[wsname];
				/* Convert array of arrays */
				const datas = XLSX.utils.sheet_to_csv(ws);
				/* Update state */
				console.log('Data>>>' + datas);
			};
			reader.readAsBinaryString(file);
		});
		setUploadStatus(true);
		setOpenMessageBar(true);
	}, []);

	return (
		<>
			{openMessageBar ? <Message status={uploadStatus} /> : null}
			<ContainerBox onDrop={handleFileDrop} uplaodData={uplaodData} />
			<FileList files={droppedFiles} />
		</>
	);
};
