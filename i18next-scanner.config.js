var typescriptTransform = require('i18next-scanner-typescript');

module.exports = {
	input: [
		'src/**/*.{js,jsx,ts,tsx}',
		'!src/**/*.spec.{js,jsx,ts,tsx}',
		'!src/locales/**',
		'!**/node_modules/**'
	],
	options: {
		debug: true,
		func: {
			list: ['i18next.t', 'i18n.t'],
			extensions: ['.tsx', '.ts', '.js', '.jsx']
		},
		trans: {
			component: 'Trans',
			i18nKey: 'i18nKey',
			defaultsKey: 'defaults',
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			fallbackKey: function(ns, value) {
				return value;
			},
			acorn: {
				ecmaVersion: 10, // defaults to 10
				sourceType: 'module' // defaults to 'module'
				// Check out https://github.com/acornjs/acorn/tree/master/acorn#interface for additional options
			}
		},
		lngs: ['en', 'fr', 'es', 'de', 'it'],
		ns: ['translation'],
		defaultLng: 'en',
		defaultNs: 'translation',
		defaultValue: (lng, ns, key) => '',
		resource: {
			loadPath: 'src/locales/{{lng}}/translation.json',
			savePath: 'src/locales/{{lng}}/translation.json',
			jsonIndent: 2,
			lineEnding: '\n'
		},
		nsSeparator: ':',
		keySeparator: '.'
	},
	transform: typescriptTransform({ extensions: ['.tsx'] })
};
