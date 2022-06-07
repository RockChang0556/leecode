const path = require('path');

module.exports = {
	rootDir: path.resolve(__dirname),
	clearMocks: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
	preset: 'ts-jest',
	moduleNameMapper: {
		'@/(.*)': '<rootDir>/src/$1',
	},
	// 测试文件
	testMatch: ['<rootDir>/src/**/*.test.(ts|tsx|js)'],
	testPathIgnorePatterns: ['/node_modules/'],
};
