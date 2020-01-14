import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { Container } from './Container';

describe('UploadContainer', () => {
	let uploadContainer: ShallowWrapper;

	beforeEach(() => {
		uploadContainer = shallow(<Container />);
	});

	it('should create', () => {
		expect(uploadContainer.find('div').text()).toBe('This component is created');
	});
});
