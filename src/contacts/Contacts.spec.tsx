import * as React from 'react';
import { Contacts } from './Contacts';
import { shallow } from 'enzyme';

it('should create contacts', () => {
	const wrapper = shallow(<Contacts />);
	expect(wrapper.find('div').text()).toBe("Hello it's a contact");
});
