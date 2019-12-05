import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Fetch from 'i18next-fetch-backend';
import translationDE from './locales/de/translation.json';
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';
import translationES from './locales/es/translation.json';
import translationIT from './locales/it/translation.json';

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
		resources,
		lng: 'en',
		debug: true,
		fallbackLng: 'en',
		keySeparator: false,
		interpolation: {
			escapeValue: false
		}
	});

export default i18n;
