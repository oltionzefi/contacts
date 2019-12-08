import React from 'react';
import { Upload } from './Upload';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Upload', () => {
	let upload: ShallowWrapper;

	beforeEach(() => {
		upload = shallow(<Upload />);
	});

	it('renders upload', () => {
		expect(upload.find('div').text()).toContain('Upload');
	});
});
