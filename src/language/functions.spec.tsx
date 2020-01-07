import { translateFunction } from './functions';
import { languages } from './constants';
import i18n from '../i18nForTests';

describe('LanguageSelector functions', () => {
	let lang = languages;
	const t = i18n.t;
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
