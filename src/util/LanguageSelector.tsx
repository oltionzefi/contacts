import React, { useState } from 'react';
import i18n from '../i18n';
import { withTranslation } from 'react-i18next';

interface LanguageTuple {
	key: string;
	value: string;
}

/** Supported languages for language switcher */
const languages: LanguageTuple[] = [
	{
		key: 'en',
		value: 'English'
	},
	{
		key: 'de',
		value: 'German'
	},
	{
		key: 'fr',
		value: 'French'
	},
	{
		key: 'es',
		value: 'Spanish'
	}
];

interface LanguageSelectorProps {
	language: string;
	onChangeLangage: (language: string) => void;
}

function LanguageSelector() {
	const [language, setLanguage] = useState('');

	React.useEffect(() => {
		if (language) {
			i18n.changeLanguage(language);
		}
	}, [language]);
	// const changeLanguage = (lng: string) => {
	// 	i18n.changeLanguage(lng);
	// };

	return (
		<div className="select">
			<select onChange={e => setLanguage(e.target.value)} value={language}>
				{languages.length &&
					languages.map((locale: LanguageTuple) => {
						return (
							<option key={locale.key} value={locale.key}>
								{locale.value}
							</option>
						);
					})}
			</select>
		</div>
	);
}

export default withTranslation()(LanguageSelector);
