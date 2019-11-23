import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { Footer } from './Footer';

describe('Footer', () => {
	let footer: ShallowWrapper;

	beforeEach(() => {
		footer = shallow(<Footer />);
	});

	it('renders footer', () => [expect(footer.find('div').text()).toBe('Footer')]);
});
