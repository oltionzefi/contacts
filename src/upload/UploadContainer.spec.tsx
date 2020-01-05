import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { UploadContainer } from './UploadContainer';

describe('UploadContainer', () => {
	let uploadContainer: ShallowWrapper;

	beforeEach(() => {
		uploadContainer = shallow(<UploadContainer />);
	});

	it('should create', () => {
		expect(uploadContainer.find('div').text()).toBe('This component is created');
	});
});
