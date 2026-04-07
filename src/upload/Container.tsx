import React, { useCallback, useState } from 'react';
import { DropTargetMonitor } from 'react-dnd';
import { FileList } from './FileList';
import { ContainerBox } from './ContainerBox';
import ExcelJS from 'exceljs';
import { Message } from './Message';

export const Container: React.FC = () => {
	const [droppedFiles, setDroppedFiles] = useState<File[]>([]);
	const [uploadStatus, setUploadStatus] = useState<boolean>(false);
	const [openMessageBar, setOpenMessageBar] = useState<boolean>(false);

	const handleFileDrop = useCallback(
		(item: any, monitor: DropTargetMonitor) => {
			if (monitor) {
				const dropped = monitor.getItem() as { files: File[] };
				setDroppedFiles(dropped.files);
			}
		},
		[]
	);

	const uplaodData = useCallback((item: any) => {
		item.files.forEach((file: File) => {
			const reader = new FileReader();
			reader.onload = async (e) => {
				const data = e.target?.result as ArrayBuffer;
				const workbook = new ExcelJS.Workbook();
				await workbook.xlsx.load(data);
				const worksheet = workbook.worksheets[0];
				const rows: string[] = [];
				worksheet.eachRow((row) => {
					rows.push((row.values as string[]).slice(1).join(','));
				});
				console.log('Data>>>' + rows.join('\n'));
			};
			reader.readAsArrayBuffer(file);
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
