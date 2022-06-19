module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!**/**/*protocols.ts*',
    '!**/**/protocols/index.ts',
    '!.husky',
    '**/test/**'
  ],
  testPathIgnorePatterns: [
    '.husky',
    'node_modules'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
