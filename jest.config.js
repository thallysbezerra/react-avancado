module.exports = {
  testEnvironment: 'jsdom', // Simulate browser
  testPathIgnorePatterns: ['/node_modules', '/.next/'], // Ignore some directories
  collectCoverage: true, // Test coverage
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'], // Test coverage from
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'] // Load config before running test
}
