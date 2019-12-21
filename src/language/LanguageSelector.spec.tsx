import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { LanguageSelector } from './LanguageSelector';

describe('LanguageSelector', () => {
	let languageSelector: ShallowWrapper;

	beforeEach(() => {
		languageSelector = shallow(<LanguageSelector />);
	});

	it('renders languages selector', () => {});
});
