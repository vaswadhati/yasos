Getting to know React Router 4
==============================

Features
--------

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

CSS-Module, CSS-Loader, SASS
----------------------------
- https://stackoverflow.com/questions/45506131/how-to-disable-css-modules-for-one-file-in-webpack
- [disabling css modules per-stylesheet](https://github.com/webpack-contrib/css-loader/issues/215)
- [flag to disable local scoping](https://github.com/webpack-contrib/css-loader/issues/193#issuecomment-342872867)
- [can't resolve :global, :local](https://github.com/webpack-contrib/sass-loader/issues/448#issuecomment-338009911)
[discussion on how to use css-modules with other global css](https://github.com/css-modules/css-modules/pull/65)

Recommended Reading
===================
Use the links in this section as a means to get an overview and a gentler
introduction to concepts, not as a reference. Go to the source for reference.

### CSS, SASS, ...
- https://itnext.io/sharing-sass-resources-with-sass-resources-loader-and-webpack-ca470cd11746 (* pretty cool *)

### Redux
- https://github.com/erikras/ducks-modular-redux
- https://github.com/alexnm/re-ducks

### React, Router, ...
- https://medium.com/@pshrmn/demystifying-single-page-applications-3068d0555d46
- https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
- https://css-tricks.com/react-router-4/

Go to the source
================
Spend sufficient time reading through these references. The payoff outweighs the hours you will spend googling for answers.

React Router 4
--------------
- https://github.com/ReactTraining/react-router

CSS-Loader
----------
- https://github.com/webpack-contrib/css-loader
- https://github.com/shakacode/sass-resources-loader
