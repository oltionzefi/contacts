/**
 * Synchronous i18n instance for Storybook (no HTTP backend — loads inline JSON).
 * Import this instead of the main i18n.tsx in stories and the preview decorator.
 */
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import de from './locales/de/translation.json';
import fr from './locales/fr/translation.json';
import es from './locales/es/translation.json';
import it from './locales/it/translation.json';

const i18nStories = i18next.createInstance();

i18nStories.use(initReactI18next).init({
	lng: 'en',
	fallbackLng: 'en',
	ns: ['translation'],
	defaultNS: 'translation',
	resources: {
		en: { translation: en },
		de: { translation: de },
		fr: { translation: fr },
		es: { translation: es },
		it: { translation: it },
	},
	interpolation: { escapeValue: false },
});

export default i18nStories;
