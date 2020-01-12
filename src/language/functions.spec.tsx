import { translateFunction } from './functions';
import { languages } from './constants';
import { useTranslation } from 'react-i18next';

describe('LanguageSelector functions', () => {
	let lang = languages;
	const { t } = useTranslation();
	const translateItems = translateFunction(t);

	it('should translate languages to english if en', () => {
		expect(translateItems(lang)).toEqual([
			{ key: 'en', text: 'English' },
			{ key: 'de', text: 'German' },
			{ key: 'fr', text: 'French' },
			{ key: 'es', text: 'Spanish' },
			{ key: 'it', text: 'Italian' }
		]);
	});

	it('should translate languages to german if de', () => {
		expect(translateItems(lang)).toEqual([
			{ key: 'en', text: 'Englisch' },
			{ key: 'de', text: 'Deutsche' },
			{ key: 'fr', text: 'Französisch' },
			{ key: 'es', text: 'Spanisch' },
			{ key: 'it', text: 'Italienisch' }
		]);
	});
});
