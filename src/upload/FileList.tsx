import React, { useMemo } from 'react';
import { darkKhakiBackground, darkGreenBackground } from './styles';
import { useTranslation } from 'react-i18next';

export interface FileListProps {
	files: File[];
}

function list(files: File[]) {
	const label = (file: File) => `'${file.name}' of size '${file.size}' and type '${file.type}'`;
	return files.map(file => <li key={file.name}>{label(file)}</li>);
}

const FileList: React.FC<FileListProps> = ({ files }) => {
	const { t } = useTranslation();
	if (files.length === 0) {
		return (
			<div style={{ backgroundColor: darkKhakiBackground }}>
				{t('contact.upload.file.none')}
			</div>
		);
	}
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const fileList = useMemo(() => list(files), [files]);
	return <div style={{ backgroundColor: darkGreenBackground }}>{fileList}</div>;
};

export default FileList;
