// v.a:
//   hacky way to prevent babel from converting ES6 to ES5 is to choose a
//   browser that fully supports ES6... we just need to convert jsx to
//   vdom, and leave rest of the ES6 code intact.
const presets = [
  ['env', {
    loose: true,
    modules: false,
    useBuiltins: true,
    debug: true,
    targets: {
      chrome: 65,
      uglify: false
    }
  }],
];

const plugins = [
  ['transform-react-jsx', { 'pragma': 'h' }],
  ['transform-object-rest-spread', { useBuiltins: true }],
  ['syntax-dynamic-import'],
];

/**
 *
 * @param {wpc} weppack based project configuration
 *
 */
module.exports = (wpc) => {
  const test = /\.jsx?$/;
  const exclude = /(node_modules|bower_components)/;

  if (wpc.isProd) {
    plugins.push([
      'transform-react-remove-prop-types',
      {
        mode: 'remove',
        removeImport: true,
        additionalLibraries: ['react', 'react-dom'],
      },
    ]);
  }

  const loaders = [
    {
      loader: 'babel-loader',
      options: { presets, plugins }
    },
  ];

  const module = {
    rules: [
      {
        test, exclude, use: loaders
      },
    ]
  };

  return { module };
};
