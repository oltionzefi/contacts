import { useLanguageStore } from './language.store';

export { useLanguageStore };

/** Compatibility alias for components using the old service API */
export const languageService = {
	setLanguage: (lang: string) =>
		useLanguageStore.getState().setLanguage(lang),
};
