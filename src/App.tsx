import React, { Suspense } from 'react';
import './App.css';
import { initializeIcons, loadTheme } from '@fluentui/react';
import { Container } from './Container';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Contact, Contacts } from './contacts';
import { Upload } from './upload';

/**
 * Loading the theme
 * @TODO optional theme
 */
loadTheme({
	palette: {
		themePrimary: '#2563EB',
		themeLighterAlt: '#eff6ff',
		themeLighter: '#dbeafe',
		themeLight: '#bfdbfe',
		themeTertiary: '#60a5fa',
		themeSecondary: '#3b82f6',
		themeDarkAlt: '#1d4ed8',
		themeDark: '#1e40af',
		themeDarker: '#1e3a8a',
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
		white: '#ffffff',
	},
});

/**
 * By default icons are not loaded
 * @see https://github.com/OfficeDev/office-ui-fabric-react/wiki/Using-icons
 */
initializeIcons();

const App: React.FC = () => (
	<Container>
		<BrowserRouter>
			<Suspense
				fallback={<div className="loading-fallback">Loading…</div>}
			>
				<Routes>
					<Route path="/" element={<Contacts />} />
					<Route path="/new" element={<Contact />} />
					<Route path="/upload" element={<Upload />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	</Container>
);

export default App;
