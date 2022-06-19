module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!**/**/*protocols.ts*',
    '!**/**/protocols/index.ts'
  ],
  coverageDirectory: 'coverage',
  collectCoverage: false,
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
