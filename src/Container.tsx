import React from 'react';
import { Navbar } from './navbar';
import { LanguageSelector } from './language/LanguageSelector';
import { Fabric, mergeStyleSets } from '@fluentui/react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const classNames = mergeStyleSets({
	shell: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		minHeight: 0,
		backgroundColor: '#F8FAFC',
	},
});

export const Container: React.FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	return (
		<Fabric className={classNames.shell}>
			<I18nextProvider i18n={i18n}>
				<header className="app-header">
					<div className="app-header__nav">
						<Navbar />
					</div>
					<div className="app-header__actions">
						<LanguageSelector />
					</div>
				</header>
				{/* app-main fills the flex height; app-content centers the content column */}
				<main className="app-main">
					<div className="app-content">{children}</div>
				</main>
			</I18nextProvider>
		</Fabric>
	);
};
