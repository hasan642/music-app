const config = {
    preset: 'react-native',
    collectCoverage: true,
    moduleDirectories: ['node_modules', 'src'],
    setupFilesAfterEnv: ['./setup-tests.js'],
    transformIgnorePatterns: ['node_modules/(?!(jest-)?react-native)'],
    coveragePathIgnorePatterns: ['/node_modules/', '/jest'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
};

/**
 * export config as default.
 */
export default config;