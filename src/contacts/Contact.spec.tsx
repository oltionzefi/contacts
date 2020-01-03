import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Contact } from './Contact';
import { Contact as Model } from './state';

describe('Contact', () => {
	let contact: ShallowWrapper;

	const contactMock: Model = {
		id: 'b2931f4bb4',
		firstname: 'Alex',
		lastname: 'Fernando',
		email: 'alex.fernando@fake.com',
		phoneNumber: '+213123',
		deleted: false
	};

	beforeEach(() => {
		contact = shallow(<Contact contact={contactMock} />);
	});

	it('renders addContact', () => {
		expect(contact.find('div').text()).toBe('Adding contact');
	});
});
