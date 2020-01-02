import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ContactItem } from './ContactItem';
import { Contact } from './state';
import { TFunction } from 'i18next';

describe('ContactItem', () => {
	let contactItem: ShallowWrapper;

	const contactMock: Contact = {
		id: 'b2931f4bb4',
		firstname: 'Alex',
		lastname: 'Fernando',
		email: 'alex.fernando@fake.com',
		phoneNumber: '+213123',
		deleted: false
	};

	const t: TFunction = jest.fn();

	beforeEach(() => {
		contactItem = shallow(<ContactItem contact={contactMock} tFunction={t} />);
	});

	it('renders contact item', () => {
		expect(contactItem.find('div').text()).toBe("Hello it's a contact");
	});
});
