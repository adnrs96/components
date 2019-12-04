const { defaults } = require('jest-config')

module.exports = {
  preset: defaults.preset,
  verbose: process.env.NODE_ENV !== 'production',
  moduleFileExtensions: ['ts', 'js', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: ['node_modules'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^&/(.*)$': '<rootDir>/types/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  testMatch: [process.env.TEST_MODE === 'percy' ? '**/tests/percy/index.ts' : '**/tests/unit/**/*.spec.ts'],
  testURL: 'http://localhost',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  globals: {
    'ts-jest': {
      babelConfig: true
    }
  },
  collectCoverage: process.env.TEST_MODE !== 'percy',
  collectCoverageFrom: [
    'src/**/*.{js,ts,vue}',
    '!src/(styleguide|index|storyscript).ts',
    '!src/components/index.ts',
    '!src/utils/*.{js,ts}',
    '!src/store/**/*.{js,ts}',
    '!src/docs/**/*.vue'
  ]
}
