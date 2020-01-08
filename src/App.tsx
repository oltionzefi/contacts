import React, { Suspense } from 'react';
import './App.css';
import { initializeIcons, loadTheme } from 'office-ui-fabric-react';
import { Container } from './Container';
import { Route, BrowserRouter } from 'react-router-dom';
import { Contact, Contacts } from './contacts';
import { Upload } from './upload';
import { akitaDevtools, persistState } from '@datorama/akita';

/**
 * Loading the theme
 * @TODO optional theme
 */
loadTheme({
	palette: {
		themePrimary: '#ddd000',
		themeLighterAlt: '#eff6fc',
		themeLighter: '#deecf9',
		themeLight: '#c7e0f4',
		themeTertiary: '#71afe5',
		themeSecondary: '#2b88d8',
		themeDarkAlt: '#106ebe',
		themeDark: '#005a9e',
		themeDarker: '#004578',
		neutralLighterAlt: '#f8f8f8',
		neutralLighter: '#f4f4f4',
		neutralLight: '#eaeaea',
		neutralQuaternaryAlt: '#dadada',
		neutralQuaternary: '#d0d0d0',
		neutralTertiaryAlt: '#c8c8c8',
		neutralTertiary: '#c2c2c2',
		neutralSecondary: '#858585',
		neutralPrimaryAlt: '#4b4b4b',
		neutralPrimary: '#333333',
		neutralDark: '#272727',
		black: '#1d1d1d',
		white: '#ffffff'
	}
});

/**
 * By default icons are not loaded
 * @see https://github.com/OfficeDev/office-ui-fabric-react/wiki/Using-icons
 */
initializeIcons();

akitaDevtools();

persistState({
	include: ['language', 'contacts']
});

class App extends React.Component {
	render() {
		return (
			<Container>
				<BrowserRouter>
					<Suspense fallback={<div>Loading... </div>}>
						<Route path="/" exact component={Contacts} />
						<Route path="/new" component={Contact} />
						<Route path="/upload" component={Upload} />
					</Suspense>
				</BrowserRouter>
			</Container>
		);
	}
}

export default App;
