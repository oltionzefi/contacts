import { LanguageStore, languageStore } from './language.store';

export class LanguageService {
	constructor(private readonly languageStore: LanguageStore) {}

	setLanguage(language: string): void {
		this.languageStore.update({ language: language });
	}
}

export const languageService = new LanguageService(languageStore);
