import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { Content } from './Content';

describe('Content', () => {
	let content: ShallowWrapper;

	beforeEach(() => {
		content = shallow(<Content />);
	});

	it('renders content', () => {
		expect(content.find('div').text()).toBe('Content');
	});
});
