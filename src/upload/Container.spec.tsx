import React from 'react';
import { Container } from './Container';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Upload Container', () => {
	let uplaodContainer: ShallowWrapper;

	beforeEach(() => {
		uplaodContainer = shallow(<Container />);
	});

	it('renders upload', () => {
		expect(uplaodContainer.children).toContain('ContainerBox');
	});
});
