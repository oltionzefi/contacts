import React from 'react';
import { Toolbar } from './Toolbar';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Toolbar', () => {
	let toolbar: ShallowWrapper;

	beforeEach(() => {
		toolbar = shallow(<Toolbar />);
	});

	it('renders toolbar', () => {
		expect(toolbar.find('button').text()).toContain('New');
	});
});
