Getting started with Webpack 4.x
================================
The bare minimum boiler plate you need to get started with Webpack 4.x and one possible way to organize the various parts required to create a bundle.

It is quite possible there may be better ways and you may not even want to go down this path - choosing instead to go with ParcelJs, Preact-CLI, and Create-React-App and a dozen other alternatives.

For those wanting to know how a minimal and latest webpack based boiler plate might look like, this starter might help.

The configuration illustrates how various parts are merged together to create a set of instructions that in the end enable us to achieve the following:

- [x] reference a global style sheet and get it exported (style-loader)
- [x] get SASS/SCSS files compiled (node-sass, sass-loader)
- [x] reference a localized style for a component (style-loader)
- [x] minimize the size of the bundle (uglify, mini-css-extract, optimize-css-assets)

Intentionally this starter restricts itself from exploring popular libraries such as React/React-Router, Preact/Preact-Router, ... When you want to play close to the metal and experiment with cutting edge of ES6, this should give you a reliable starting point.

TODO:
- [] PRPL - is it worth introducing at this level using vanillajs?
- [] REST - would the simplicity be lost if we integrate a REST API?
- [] How to embed global CSS in head?
- [] Remove react dependencies in package.json

Features
--------
* SASS & Autoprefixer & CSS Modules
* Asset Versioning
* ES2015 (ES6) support
* ESLint
* PropTypes elimination in production build
* Babel support for Object spread
* Bundle Analysis

Development
-----------
> If using [Yarn](https://yarnpkg.com/), all instances of `npm` can be replaced with `yarn`. :ok_hand:

### install
```
$ npm install
```

If live-server is not installed globally do so now.

```
# check if live-server is installed
$ which `live-server`

# if not installed, install it now
$ npm install --global live-server
```

### build
```
$ npm run build
```

Compiles all files. Output is sent to the `build` directory.

### start
```
$ npm start
```
Runs your application (from the `build` directory) in the browser.

### watch
```
$ npm run watch
```

Like [`start`](#start), but will auto-compile & auto-reload the server after any file changes within the `app` and `web` directory.

Issues and FAQs
===============
In this section various links that I had to consult in order to get the starter to a working condition are listed.

SASS/SCSS, CSS-Modules
----------------------
- [custom alias for scss import](https://github.com/zeit/next.js/issues/1325)
- https://stackoverflow.com/questions/42668069/using-css-modules-with-scss#42668259
- https://stackoverflow.com/questions/43999732/how-to-make-a-fixed-column-in-css-using-css-grid-layout

NPM
---
- https://docs.npmjs.com/getting-started/fixing-npm-permissions

DOM
---
- https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518
- https://plainjs.com/javascript/manipulation/replace-a-dom-element-36/

Recommended Reading
===================
Use the links in this section as a means to get an overview and a gentler
introduction to concepts, not as a reference. Go to the source for reference.

Webpack
-------
- https://auth0.com/blog/webpack-4-release-what-is-new/

CSS Modules
-----------
- https://www.javascriptstuff.com/css-modules-by-example/

NPM
---
- https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b

CSS (GRID, MODULES, ...)
------------------------
- https://www.cssgrid.cc/css-grid-guide.html

VanillaJS
---------
- https://itnext.io/how-to-write-a-frontend-javascript-plugin-using-es6-sass-webpack-a1c6d6fdeb71
- https://ferdychristant.com/es6-modules-as-components-32a7b81fe9be
- https://gist.github.com/fchristant/8fb8e83f9d0e575c44ab9b5f9fb6d622#file-component-js

Go to the source
================
Spend sufficient time reading through these references. The payoff outweighs the hours you will spend googling for answers.

Webpack, Babel, Webpack plugins and loaders
-------------------------------------------
- https://webpack.js.org/concepts/
- http://new.babeljs.io/docs/en/babel-preset-env.html
- https://github.com/jantimon/html-webpack-plugin#configuration
