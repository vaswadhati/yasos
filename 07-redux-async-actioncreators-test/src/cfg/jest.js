module.exports = () => {
  return {
    'moduleDirectories': [
      'src/app/state',
    ],
    'moduleFileExtensions': [
      'js',
    ],
    'testEnvironment': 'jsdom',
    'testMatch': [
      '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
      '<rootDir>/src/app/state/**/?(*.)(spec|test).{js,jsx,mjs}',
    ],
  };
};
