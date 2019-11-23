import React from 'react';
import { Contacts } from './Contacts';
import { shallow, ShallowWrapper } from 'enzyme';

describe('Contacts', () => {
	let contacts: ShallowWrapper;

	beforeEach(() => {
		contacts = shallow(<Contacts />);
	});

	it('renders contacts', () => {
		expect(contacts.find('div').text()).toBe("Hello it's a contact");
	});
});
