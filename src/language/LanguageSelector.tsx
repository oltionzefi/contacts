import React, { useState } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import { LanguageTuple } from '../types';
import i18n from '../i18n';

/** Supported languages for language switcher */
const languages: LanguageTuple[] = [
	{
		key: 'en',
		text: 'English'
	},
	{
		key: 'de',
		text: 'German'
	},
	{
		key: 'fr',
		text: 'French'
	},
	{
		key: 'es',
		text: 'Spanish'
	},
	{
		key: 'it',
		text: 'Italian'
	}
];

const LanguageSelector = (props: WithTranslation) => {
	const { t } = props;
	const [language, setLanguage] = useState('');

	React.useEffect(() => {
		if (language) {
			i18n.changeLanguage(language);
		}
	}, [language]);

	const translateItems = (languages: LanguageTuple[]) => {
		return languages.map((language: LanguageTuple) => {
			language = translate(language);
			return language;
		});
	};

	const translate = (language: LanguageTuple) => {
		if (language.key != null) {
			language.text = t(language.key);
		}

		return language;
	};

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

export default withTranslation()(LanguageSelector);
