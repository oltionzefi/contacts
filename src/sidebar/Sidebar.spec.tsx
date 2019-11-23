import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
	let sidebar: ShallowWrapper;

	beforeEach(() => {
		sidebar = shallow(<Sidebar />);
	});

	it('renders sidebar', () => {
		expect(sidebar.find('div').text()).toBe('Sidebar');
	});
});
