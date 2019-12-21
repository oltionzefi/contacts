import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Fetch from 'i18next-fetch-backend';
import translationDE from './locales/de/translation.json';
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import translationES from './locales/es/translation.json';
import translationIT from './locales/it/translation.json';

export const defaultLanguage = 'en';
const supportedLanguages = ['en', 'fr', 'de', 'it', 'es'];

// the translations
const resources = {
	en: {
		translation: translationEN
	},
	de: {
		translation: translationDE
	},
	fr: {
		translation: translationFR
	},
	es: {
		translation: translationES
	},
	it: {
		translation: translationIT
	}
};

i18n.use(Fetch)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		whitelist: supportedLanguages,
		resources,
		debug: true,
		fallbackLng: defaultLanguage,
		keySeparator: false,
		interpolation: {
			escapeValue: false
		},
		initImmediate: false
	});

export default i18n;
