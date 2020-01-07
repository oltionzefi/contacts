import React from 'react';
import { Navbar } from './navbar';
import { LanguageSelector } from './language/LanguageSelector';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import { mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const classNames = mergeStyleSets({
	wrapper: {
		textAlign: 'center'
	},
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		marginLeft: '2em',
		marginRight: '2em'
	}
});

export class Container extends React.Component {
	render() {
		return (
			<Fabric className={classNames.wrapper}>
				<I18nextProvider i18n={i18n}>
					<div className="header">
						<Navbar />
						<LanguageSelector />
					</div>
					<div className={classNames.container}>{this.props.children}</div>
				</I18nextProvider>
			</Fabric>
		);
	}
}
