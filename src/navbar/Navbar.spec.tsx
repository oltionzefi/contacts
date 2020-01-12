import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Navbar } from './Navbar';

describe('Navbar', () => {
	let navbar: ShallowWrapper;

	beforeEach(() => {
		navbar = shallow(<Navbar />);
	});

	it('renders navbar', () => {
		expect(navbar.find('div').children).toBe('Navbar');
	});
});
