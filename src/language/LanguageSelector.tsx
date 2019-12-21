import React, { useState, useEffect } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { LanguageTuple } from '../types';
import i18n from '../i18n';
import { languageService, languageQuery } from './state';
import { languages } from './constants';
import { translateFunction } from './functions';

/** @todo change language is not triggering change of props to be changed */
const LanguageSelectorFunction = (props: WithTranslation) => {
	const { t } = props;
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

	return (
		<div className="select">
			<select onChange={e => setLanguage(e.target.value)} value={language}>
				{transLanguages.length &&
					transLanguages.map((locale: LanguageTuple) => {
						return (
							<option key={locale.key} value={locale.key}>
								{locale.text}
							</option>
						);
					})}
			</select>
		</div>
	);
};

export const LanguageSelector = withTranslation()(LanguageSelectorFunction);
