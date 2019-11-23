import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { AddContact } from './AddContact';

describe('AddContacts', () => {
	let addContact: ShallowWrapper;

	beforeEach(() => {
		addContact = shallow(<AddContact />);
	});

	it('renders addContact', () => {
		expect(addContact.find('div').text()).toBe('Adding contact');
	});
});
