import React from 'react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { Navbar } from './navbar';
import { Content } from './content';
import { Sidebar } from './sidebar';
import { Footer } from './footer';
import LanguageSelector from './language/LanguageSelector';

class Container extends React.Component {
	render() {
		return (
			<Fabric className="App">
				<div className="header">
					<Navbar />
					<LanguageSelector />
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

export default Container;
