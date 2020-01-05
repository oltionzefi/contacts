import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { ContactItem } from './ContactItem';
import { Contact } from './state';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const translate = i18n.use(initReactI18next).init({
	fallbackLng: 'en',
	debug: true
});

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

	const i18n = translate as any;
	const t = jest.fn();
	const tReady = false;

	beforeEach(() => {
		contactItem = shallow(
			<ContactItem contact={contactMock} i18n={i18n} t={t} tReady={tReady} />
		);
	});

	it('renders contact item', () => {
		expect(contactItem.find('div').text()).toBe("Hello it's a contact");
	});
});
