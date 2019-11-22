import React from 'react';
import { Toolbar } from './Toolbar';
import { shallow } from 'enzyme';

it('renders toolbar', () => {
	const div = shallow(<Toolbar />);
	expect(div.find('button').text()).toContain('New');
});
