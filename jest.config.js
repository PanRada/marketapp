module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/__tests__/jest/setup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testPathIgnorePatterns: ['/node_modules/', '/__tests__/jest/setup.js'],
};
