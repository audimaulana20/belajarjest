module.exports = {
    bail: 1,
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
      './src/modules/modules1/*.js',
      './src/modules/modules2/*.js',
    ],
    coverageReporters: ['lcov'],
    detectOpenHandles: true,
    forceExit: true,
    testEnvironment: 'node',
    testMatch: ['**/*.test.js'],
    setupFilesAfterEnv: [
      'jest-extended'
    ],
    verbose: true,
}