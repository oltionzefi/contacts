import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { I18nProvider } from '@lingui/react';
import { defaultLocale, loadMessages } from './i18n';

// Wrapping the App into I18nProvider for internationalization
const Application: React.FC = () => {
	const [catalogs, setCatalogs] = useState({});
	const [language, setLanguage] = useState(defaultLocale);

	async function handleLanguageChange(language: string) {
		const newCatalog = await loadMessages(language);

		const newCatalogs = { ...catalogs, [language]: newCatalog };

		setCatalogs(newCatalogs);
		setLanguage(language);
	}

	return (
		<I18nProvider language={language} catalogs={catalogs}>
			<App language={language} onLanguageChange={handleLanguageChange} />
		</I18nProvider>
	);
};

ReactDOM.render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
