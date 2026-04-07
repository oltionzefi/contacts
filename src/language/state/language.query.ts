import { useLanguageStore } from './language.store';

export { useLanguageStore };

/** Compatibility shim for components using the old query API */
export const languageQuery = {
	getLanguage: () => useLanguageStore.getState().language,
};
