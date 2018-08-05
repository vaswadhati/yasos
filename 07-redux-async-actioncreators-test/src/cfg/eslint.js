/**
 *
 * @param {wpc} weppack based project configuration
 *
 */
module.exports = (wpc) => {
  const test = /\.jsx?$/, exclude = /node_modules/;
  const rules = [{
    test, exclude, include: [wpc.app, wpc.lib],
    // enables ESLint to run before anything else
    enforce: 'pre',
    use: [
      // eslint runs before babel
      {
        loader: 'eslint-loader',
      },
    ],
    env: {
      jest: true
    },
    plugins: ['jest'],
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error'
    }
  }];

  return {
    module: { rules }
  };
};
