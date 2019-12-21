import { Query } from '@datorama/akita';
import { LanguageStore, languageStore, LanguageState } from './language.store';

export class LanguageQuery extends Query<LanguageState> {
	selectLanguage$ = this.select(state => !!state.language);

	constructor(protected store: LanguageStore) {
		super(store);
	}

	getLanguage(): string {
		return this.getValue().language;
	}
}

export const languageQuery = new LanguageQuery(languageStore);
