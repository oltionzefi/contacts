import React from 'react';
import { ShallowWrapper, shallow } from 'enzyme';
import { LanguageSelector, useLanguageSelector } from './LanguageSelector';

describe('LanguageSelector', () => {
	let languageSelector: ShallowWrapper;

	beforeEach(() => {
		languageSelector = shallow(<LanguageSelector />);
	});

	it('should match the snapshot', () => {
		expect(languageSelector.html()).toMatchSnapshot();
	});

	it('should render languages select dropdown', () => {
		expect(languageSelector.find('select').length).toEqual(1);
	});

	it('should render props for language select', () => {
		expect(languageSelector.find('select').props()).toEqual({
			className: 'select'
		});
	});

	it('should render default language as selected', () => {
		expect(languageSelector.find('select').prop('value')).toEqual('en');
	});

	it('should change selected language on change', () => {
		languageSelector.find('select').simulate('change', {
			target: {
				value: 'de'
			}
		});

		expect(languageSelector.find('select').prop('value')).toEqual('de');
	});
});

describe('useLanguageSelector', () => {
	const LanguageSelectorElement = () => {
		const props = useLanguageSelector();

		return <div>{props}</div>;
	};

	const languageSelector = shallow(<LanguageSelectorElement />);

	it('should have props for select dropdown', () => {
		expect(languageSelector.props()).toEqual({
			transLanguages: 'English',
			value: 'en',
			onChange: expect.any(Function)
		});
	});
});
