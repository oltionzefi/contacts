import React from 'react';
import { t } from '@lingui/macro';
import { i18n, MessageDescriptor } from '@lingui/core';
import { Trans } from '@lingui/react';

interface LanguageTuple {
	key: string;
	value: string;
}

interface LanguageSelectorProps {
	language: string;
	onChangeLangage: (language: string) => void;
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

const translatedLanguages = languages.map((language: LanguageTuple) => {
	return { ...language, value: i18n._(language.value) };
});

export function LanguageSelector({ language, onChangeLangage }: LanguageSelectorProps) {
	function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
		event.preventDefault();

		onChangeLangage(event.target.value);
	}

	return (
		<div className="select">
			<select onChange={handleChange} value={language}>
				{translatedLanguages.length &&
					translatedLanguages.map((locale: LanguageTuple) => {
						return <option value={locale.key}>{locale.value}</option>;
					})}
			</select>
		</div>
	);
}
