import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { FileList } from './FileList';

describe('FileList', () => {
	let fileList: ShallowWrapper;

	const files: File[] = [
		{
			name: 'test.xlsx',
			lastModified: 1579035481534,
			size: 8599,
			type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
			slice: (): Blob =>
				new Blob([JSON.stringify('Bla', null, 2)], {
					type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
				})
		}
	];

	beforeEach(() => {
		fileList = shallow(<FileList files={files} />);
	});

	it('should have rendered a darkgreen div when have files', () => {
		expect(fileList.find('div').props()).toEqual({
			backgroundColor: 'darkgreen'
		});
	});

	it('should render the file list', () => {
		expect(fileList.find('div').html()).toEqual({});
	});

	describe('FileList with no files', () => {
		const files = [];

		beforeEach(() => {
			fileList = shallow(<FileList files={files} />);
		});

		it('should have rendered a darkkhaki div when does not have files', () => {
			expect(fileList.find('div').props()).toEqual({
				backgroundColor: 'darkkhakis'
			});
		});

		it('should have text description as "no file uploaded"', () => {
			expect(fileList.find('div').text()).toBe('contact.upload.file.none');
		});
	});
});
