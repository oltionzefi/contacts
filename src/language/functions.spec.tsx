import { translateFunction } from './functions';
import { languages } from './constants';

const t = (key: string) => key;

describe('LanguageSelector functions', () => {
	const lang = languages;
	const translateItems = translateFunction(t as any);

	it('should translate languages returning translation keys', () => {
		const result = translateItems(lang);
		expect(result).toHaveLength(5);
		expect(result[0].key).toBe('en');
		expect(result[1].key).toBe('de');
		expect(result[2].key).toBe('fr');
		expect(result[3].key).toBe('es');
		expect(result[4].key).toBe('it');
	});

	it('should map each language key to its translated text', () => {
		const result = translateItems(lang);
		result.forEach((item) => {
			expect(item.text).toBe(item.key);
		});
	});
});
