CSS modules, local and global scopes
====================================
This starter's focus is to understand css modules and how to selectively choose between localized css vs global css.

The recommended reading section provides good links to read more about css modules.

In this starter we attempt to fix a nagging issue (see ![class duplication](css-duplication)) with css modules and that is of scope. Frequently we run in to the situation where style for components have to be locally scoped. Whereas the site (or app) wide styles have to remain global.


When css modules feature (enabled by the css-loader) is used for all sass/css stylesheets we end up in a situation where the sass 'includes' get duplicated. If you have many reusable css parts, then pretty soon you will discover a bloated stylesheet at the end of the build. This is not good. This starter fixes that.


Features
--------
TBD

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

TBD

Recommended Reading
===================
Use the links in this section as a means to get an overview and a gentler
introduction to concepts, not as a reference. Go to the source for reference.

TBD

Go to the source
================
Spend sufficient time reading through these references. The payoff outweighs the hours you will spend googling for answers.

TBD

References
==========
[css-duplication](../doc/css-module-gone-wrong.png)