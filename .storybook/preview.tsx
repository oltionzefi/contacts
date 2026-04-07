import React from 'react';
import type { Preview } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { initializeIcons } from '@fluentui/react';
import i18n from '../src/i18nForStories';
import '../src/index.css';

// Register FluentUI icon font once for all stories
initializeIcons();

const preview: Preview = {
	parameters: {
		layout: 'padded',
		backgrounds: {
			default: 'light',
			values: [
				{ name: 'light', value: '#F8FAFC' },
				{ name: 'white', value: '#FFFFFF' },
				{ name: 'dark', value: '#1E293B' },
			],
		},
	},
	decorators: [
		Story => (
			<MemoryRouter>
				<I18nextProvider i18n={i18n}>
					<Story />
				</I18nextProvider>
			</MemoryRouter>
		),
	],
};

export default preview;
