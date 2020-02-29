module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  testMatch: ['**/*.(test|spec).(ts|tsx)'],
  globals: {
    'babel-jest': {
      useBabelrc: true,
      tsConfig: 'jest.tsconfig.json',
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/', 'enzyme.js'],
  setupFilesAfterEnv: ['<rootDir>/enzyme.js'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '.+\\.svg?.+$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '^assets(.*)$': '<rootDir>/assets$1',
    '^pages(.*)$': '<rootDir>/pages$1',
    '^Components(.*)$': '<rootDir>/Components$1',
    '^containers(.*)$': '<rootDir>/containers$1',
    '^hooks(.*)$': '<rootDir>/hooks$1',
    '^containers-admin(.*)$': '<rootDir>/containers-admin$1',
    '^configs(.*)$': '<rootDir>/configs$1',
    '^utils(.*)$': '<rootDir>/utils$1',
    '^db(.*)$': '<rootDir>/db$1',
    '^oop(.*)$': '<rootDir>/oop$1',
    '^types(.*)$': '<rootDir>/types$1',
  },
  reporters: ['default', 'jest-junit'],
};
