const typescriptTransform = require('i18next-scanner-typescript');

module.exports = {
	input: ['src/**/*.{js,jsx,ts,tsx}', '!src/locales/**', '!**/node_modules/**'],
	options: {
		debug: true,
		func: {
			list: ['i18next.t', 'i18n.t', 't'],
			extensions: ['.tsx', '.ts', '.js', '.jsx']
		},
		trans: {
			component: 'Trans'
		},
		lngs: ['en', 'fr', 'es', 'de', 'it'],
		ns: ['translation'],
		defaultLng: 'en',
		// removeUnusedKeys: true, // Don't use this if you want menu to be translated
		defaultNs: 'translation',
		defaultValue: (lng, ns, key) => '',
		resource: {
			loadPath: 'src/locales/{{lng}}/translation.json',
			savePath: 'src/locales/{{lng}}/translation.json',
			jsonIndent: 2,
			lineEnding: '\n'
		},
		nsSeparator: false, // namespace separator
		keySeparator: false // key separator
	},
	transform: typescriptTransform({ extensions: ['.tsx'] })
};
