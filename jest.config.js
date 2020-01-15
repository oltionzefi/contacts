module.exports = {
	testEnvironment: 'jest-environment-jsdom-fifteen',
	rootDir: __dirname,
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		'^.+\\.ts?$': 'ts-jest',
		'^.+\\.jsx?$': 'babel-jest',
		'^.+\\.js?$': 'babel-jest'
	},
	roots: ['<rootDir>/src'],
	testMatch: [
		'<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
		'<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'
	],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	transformIgnorePatterns: ['<rootDir>/(node_modules)/'],
	modulePathIgnorePatterns: ['<rootDir>/(node_modules)/'],
	modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
	setupFiles: ['<rootDir>/src/setupTests.ts'],
	moduleNameMapper: {
		i18next: '<rootDir>/__mocks__/react-i18next.js'
	}
};
