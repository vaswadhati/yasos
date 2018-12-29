What the fish is JSX?
=====================
Bundling plain ES6, HTML5 and CSS is cool, as we saw in the vanilla starter. We
can build pretty complex web apps with just those three. It gets tedious very
soon though, especially when dealing with events and event handler binding. More
importantly it becomes difficult to reason with the flow of the app.

This starter introduces JSX and Preact - two conceptual entities that typically
go together.

The rationale for this starter remains the same as in the case of the vanilla
starter. It pays to knows the in and out of bundling a web app without depending
on adjunt tooling (such as preact-cli, create-react-app) - for the times when
you need to get something done that is outside the scope of what such tools
provide.

Intentionally we stay away from advanced concepts such as offline first, service
workers, css-in-js. We'll get to them further down the road.

Features
--------
* All the features of Vanilla
* Preact + JSX

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
Listed in this section are links that I had to consult to get the starter to a working condition.

PropTypes
---------
- https://stackoverflow.com/questions/47311310/proptypes-isrequired-on-react-router-4-params-prop

Recommended Reading
===================
Use the links in this section as a means to get an overview and a gentler
introduction to concepts, not as a reference. Go to the source for reference.

- https://jasonformat.com/wtf-is-jsx/
- https://jasonformat.com/props-down-events-up/
- https://preactjs.com/guide/differences-to-react

Go to the source
================
Spend sufficient time reading through these references. The payoff outweighs the hours you will spend googling for answers.

Preact, JSX
-----------
- https://preactjs.com/guide/api-reference
- https://reactjs.org/docs/introducing-jsx.html