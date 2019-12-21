import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { Container } from './Container';

describe('Container', () => {
	let container: ShallowWrapper;

	beforeEach(() => {
		container = shallow(<Container />);
	});

	it('renders nested components', () => {
		expect(container.find('Navbar').length).toEqual(1);
		expect(container.find('LanguageSelector').length).toEqual(1);
	});
});
