import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageTuple } from '../types';
import i18n from '../i18n';
import { languageService, languageQuery } from './state';
import { languages } from './constants';
import { translateFunction } from './functions';

export const LanguageSelector: React.FC = () => {
	const { transLanguages, value, onChange } = useLanguageSelector();
	return (
		<>
			<select onChange={e => onChange(e.target.value)} value={value}>
				{transLanguages.length &&
					transLanguages.map((locale: LanguageTuple) => {
						return (
							<option key={locale.key} value={locale.key}>
								{locale.text}
							</option>
						);
					})}
			</select>
		</>
	);
};

export const useLanguageSelector = () => {
	const { t } = useTranslation();
	const [language, setLanguage] = useState(languageQuery.getLanguage());

	useEffect(() => {
		if (language) {
			if (languageQuery.getLanguage() !== language) {
				languageService.setLanguage(language);
			}
			i18n.changeLanguage(language);
		}
	}, [language]);

	const translateItems = translateFunction(t);
	let transLanguages = translateItems(languages);

	return {
		transLanguages,
		value: language,
		onChange: setLanguage
	};
};
