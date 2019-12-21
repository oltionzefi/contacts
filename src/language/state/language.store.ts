import { StoreConfig, Store } from '@datorama/akita';
import { defaultLanguage } from '../../i18n';

export interface LanguageState {
	language: string;
}

export function createInitialState(): LanguageState {
	return {
		language: defaultLanguage
	};
}

@StoreConfig({ name: 'language' })
export class LanguageStore extends Store<LanguageState> {
	constructor() {
		super(createInitialState());
	}
}

export const languageStore = new LanguageStore();
