import { KeyText } from '../types';
import { TFunction } from 'i18next';

export const translateFunction = (t: TFunction) => {
	const translateItems = (languages: KeyText[]): KeyText[] => {
		return languages.map((language: KeyText) => {
			language = translate(language);
			return language;
		});
	};

	const translate = (language: KeyText): KeyText => {
		if (language.key != null) {
			language.text = t(language.key);
		}
		return language;
	};

	return translateItems;
};
