// v.a:
//   hacky way to prevent babel from converting ES6 to ES5 is to choose a
//   browser that fully supports ES6... we just need to convert jsx to
//   vdom, and leave rest of the ES6 code intact.
const presets = (wpc) => [
  ['@babel/preset-env', {
    loose: true,
    modules: false,     /* don't transpile ES6 modules */
    useBuiltIns: false, /* disable polyfills; target the latest and greatest! */
    debug: true,
    targets: {
      chrome: 71,
      esmodules: true
    },
    // for uglify which we don't want
    forceAllTransforms: wpc.isProd,
  }],
];

const plugins = [
  ['@babel/plugin-proposal-object-rest-spread', { useBuiltins: true }],
];

/**
 *
 * @param {wpc} weppack based project configuration
 *
 */
module.exports = (wpc) => {
  const test = /\.jsx?$/;
  const exclude = /(node_modules|bower_components)/;

  const loaders = [
    {
      loader: 'babel-loader',
      options: { presets: presets(wpc), plugins }
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
