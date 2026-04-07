import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { defaultLanguage } from '../../i18n';

interface LanguageState {
	language: string;
	setLanguage: (lang: string) => void;
	getLanguage: () => string;
}

export const useLanguageStore = create<LanguageState>()(
	persist(
		(set, get) => ({
			language: defaultLanguage,
			setLanguage: (lang: string) => set({ language: lang }),
			getLanguage: () => get().language,
		}),
		{ name: 'language' }
	)
);
