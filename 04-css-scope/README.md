CSS modules, local and global scopes
====================================
This starter's focus is to understand css modules and how to selectively choose between localized css vs global css. The recommended reading section provides good links to read more about css modules.

A nagging issue (see the screen shot below) with css modules is scope. Frequently we run in to the situation where style for components have to be locally scoped. Whereas the site (or app) wide styles have to remain global.

When css modules feature (enabled in the css-loader) is used for all sass/css stylesheets we end up in a situation where the sass 'extends' get duplicated. If you have many reusable css parts, then pretty soon you will discover a bloated stylesheet at the end of the build. This is not good. There is no one size fits all solution here. There are two solutions discussed in the community:

1. Use webpack ruleset to load two css processing pipeline - one for global and another for local. For example, write a test that matches global css files and use a css processing pipeline with css-module feature disabled (in css-loader). Likewise write a test that matches local css files and create a different css processing pipeline.

The above approach works but creating two pipelines that are 99% the same seems a bit awkward to justify.

2. Wrap css class names that need to be global with a ':global()'. The css-loader (I think) recognizes the decoration and skips the process of making that class name unique.

In this starter we use the second approach. The catch in both cases is that where the class names are used, you will need cascade the global class with the local class yourself.

Below you will find the size difference in stylesheet before and after

Before
------
In the screen shot below, .shadow-v0xHm is included by the use of sass 'extend' in the localized style for greeting component. The issue is if there are dozen other components that use the 'shadow' in the local css, then there will be dozen unique instances of 'shadow' in the final stylesheet.

![class-duplication](doc/css-module-gone-wrong.png)

```console
Version: webpack 4.10.2
Time: 3609ms
Built at: 2018-05-31 19:37:38
                          Asset       Size  Chunks             Chunk Names
vendors.3c3517b9b70f6a79f826.js   97.9 KiB       0  [emitted]  vendors
styles.3c3517b9b70f6a79f826.css   3.64 KiB       1  [emitted]  app
    app.3c3517b9b70f6a79f826.js   4.05 KiB       1  [emitted]  app
                     index.html  373 bytes          [emitted]
```

After
-----
With the ':global()' fix and removing extend out of any localized style, we can see that now 'shadow' can be used by any component that needs it. The tradeoff is that now in the component we must cascade in the 'shadow' style alongside the localized style.

![class-duplication](doc/css-module-done-right.png)

```console
Version: webpack 4.10.2
Time: 3560ms
Built at: 2018-05-31 19:31:44
                          Asset       Size  Chunks             Chunk Names
vendors.e5857a488e8ca56d3bf5.js   97.9 KiB       0  [emitted]  vendors
styles.e5857a488e8ca56d3bf5.css   3.25 KiB       1  [emitted]  app
    app.e5857a488e8ca56d3bf5.js   3.95 KiB       1  [emitted]  app
                     index.html  373 bytes          [emitted]
```

After properly using sass best practices
----------------------------------------


```console
Version: webpack 4.10.2
Time: 3665ms
Built at: 2018-06-01 02:27:58
                          Asset       Size  Chunks             Chunk Names
vendors.47cf3784c8d29beb1f1a.js   97.9 KiB       0  [emitted]  vendors
styles.47cf3784c8d29beb1f1a.css   3.19 KiB       1  [emitted]  app
    app.47cf3784c8d29beb1f1a.js   3.92 KiB       1  [emitted]  app
                     index.html  373 bytes          [emitted]
```

Features
--------
- [x] demonstrate escaping global sass/css styles from css-module
- [x] sass placeholder (%) and its instantiation as a global
- [x] sass @mixin and its use (include) in creating a global
- [x] sass-resource-loader - very cool plugin for sass resources

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
- [Css Selectors](https://kolosek.com/css-selectors/)
- [Sass import, partials](https://kolosek.com/sass-import/)
- [Sass Extend](https://kolosek.com/css-extend/)
- [When I Use (And Don't Use) SASS Extend](https://jdsteinbach.com/sass/use-extend/)
- [Validating input in sass](https://www.sitepoint.com/validating-input-in-sass-mixins-and-functions/)

### Webpack, Loaders, Plugins, ... - https://itnext.io/sharing-sass-resources-with-sass-resources-loader-and-webpack-ca470cd11746 (* pretty cool *)


Go to the source
================
Spend sufficient time reading through these references. The payoff outweighs the hours you will spend googling for answers.

CSS-Loader
----------
- https://github.com/webpack-contrib/css-loader
- https://github.com/shakacode/sass-resources-loader

