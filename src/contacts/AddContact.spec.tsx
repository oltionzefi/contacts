import * as React from 'react';
import { shallow } from 'enzyme';
import { AddContact } from './AddContact';

it('should create', () => {
	const wrapper = shallow(<AddContact />);
	expect(wrapper.find('div').text()).toBe('Adding contact');
});
