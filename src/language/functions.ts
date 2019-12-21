import { LanguageTuple } from '../types';
import { TFunction } from 'i18next';

export const translateFunction = (t: TFunction) => {
	const translateItems = (languages: LanguageTuple[]): LanguageTuple[] => {
		return languages.map((language: LanguageTuple) => {
			language = translate(language);
			return language;
		});
	};

	const translate = (language: LanguageTuple): LanguageTuple => {
		if (language.key != null) {
			language.text = t(language.key);
		}
		return language;
	};

	return translateItems;
};
