const { warn } = console;

// Prevents resolution warnings from babel-plugin-module-resolver
// See https://github.com/tleunen/babel-plugin-module-resolver/issues/315
// eslint-disable-next-line no-console
console.warn = (...args) => {
	for (const arg of args) {
		if (arg.startsWith('Could not resolve') && /src/.test(arg)) {
			return;
		}
	}
	warn(...args);
};

module.exports = {
	presets: [['@babel/preset-env'], '@babel/preset-typescript', '@babel/preset-react'],
	plugins: [
		'babel-plugin-dev-expression',
		'babel-plugin-macros',
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-proposal-optional-chaining'
	].filter(Boolean)
};
