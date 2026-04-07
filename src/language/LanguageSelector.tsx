import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { KeyText } from '../types';
import i18n from '../i18n';
import { useLanguageStore } from './state';
import { languages } from './constants';
import { translateFunction } from './functions';

export const LanguageSelector: React.FC = () => {
	const { transLanguages, value, onChange } = useLanguageSelector();
	return (
		<>
			<select onChange={(e) => onChange(e.target.value)} value={value}>
				{transLanguages.length &&
					transLanguages.map((locale: KeyText) => {
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
	const language = useLanguageStore((state) => state.language);
	const setLanguage = useLanguageStore((state) => state.setLanguage);

	useEffect(() => {
		i18n.changeLanguage(language);
	}, [language]);

	const translateItems = translateFunction(t);
	const transLanguages = translateItems(languages);

	return {
		transLanguages,
		value: language,
		onChange: setLanguage,
	};
};
