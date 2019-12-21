import React from 'react';
import { Navbar } from './navbar';
import { LanguageSelector } from './language/LanguageSelector';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';

export class Container extends React.Component {
	render() {
		return (
			<Fabric className="App">
				<div className="header">
					<Navbar />
					<LanguageSelector />
				</div>
				{this.props.children}
			</Fabric>
		);
	}
}
