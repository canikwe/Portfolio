const nextJest = require('next/jest')

// Loads next.config and .env files, and compiles TypeScript/JSX with Next's SWC.
const createJestConfig = nextJest({ dir: './' })

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: ['<rootDir>/__tests__/**/*.test.{ts,tsx}'],
  moduleNameMapper: { '^@/(.*)$': '<rootDir>/$1' },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/', '<rootDir>/out/'],
}

module.exports = createJestConfig(config)
