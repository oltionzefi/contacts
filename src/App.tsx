import React from 'react';
import './App.css';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Navbar } from './navbar';
import { Content } from './content';
import { Sidebar } from './sidebar';
import { Footer } from './footer';

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

class App extends React.Component {
	render() {
		return (
			<Fabric className="App">
				<div className="header">
					<Navbar />
				</div>
				<div className="body">
					<div className="content">
						<Content />
					</div>
					<div className="sidebar">
						<Sidebar />
					</div>
				</div>
				<div className="footer">
					<Footer />
				</div>
			</Fabric>
		);
	}
}

export default App;
