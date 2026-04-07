import { render, screen } from '@testing-library/react';
import { FileList } from './FileList';

describe('FileList', () => {
	const files: File[] = [
		new File(['content'], 'test.xlsx', {
			type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
		}),
	];

	it('renders the file list when files are present', () => {
		render(<FileList files={files} />);
		expect(screen.getByText(/test\.xlsx/)).toBeInTheDocument();
	});

	describe('FileList with no files', () => {
		it('shows "no file" message when empty', () => {
			render(<FileList files={[]} />);
			expect(
				screen.getByText('contact.upload.file.none'),
			).toBeInTheDocument();
		});
	});
});
