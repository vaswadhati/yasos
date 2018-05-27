Yet Another Set of Starters
===========================
Starter kits for progressive web apps span the spectrum of useless and stale to useful but bloated with the kitchen sink included. For someone coming in to the world of modern web development, especially from a C/C++ background, it can be frustrating - so close to getting started and yet a big disconnect in how it all comes together. 

To be sure, there are excellent articles written on each befuddling topic and each such article typically also provides a pointer to the worked out example. The issue however is that in the web development world, things move at break neck speed and break backward compatibility often. Leaving the article and the accompanying source stale.

Yasos is my attempt to capture my learning and *keep pace with the changes* to the core stack and the build tools. Think of it as a set of examples with a long term support (*LTS*) for as long as I remain interested in the web. Rather than create a bunch of repositories, I intend to keep the starters in this repository organized by their complexity and scope.

The List of Starters
====================

| Name           | Features                                       | Status |
|----------------|------------------------------------------------|--------|
| vanilla        | Webpack4.x, VanillaJS, HTML5, CSS3, code split | LTS    |
| basic-preact   | vanilla + (preact, preact-router), loadable    | LTS    |
| basic-react    | vanilla + (react, react-router4.x), loadable   | LTS    |
| kanban-app     | basic-react, redux, css-transitions            | LTS    |

Code Organization common to all starters
----------------------------------------

How code is organized is typically a function of project's scope and its objectives. In the case of a web app there are bewildering set of choices and complex decisions to be made. A web app consists of three main ingredients - HTML5 (for structure), CSS3(for presentation) and ES6(for behavior) - and a toolchain to mix them up.

These three can be combined and cooked in at least a dozen different ways. Depending on the complexity of the project we may need 'stock' and here again there are dozens of 'stock' to choose from and for each of the main ingredients.

The 'stock' represents any precooked or preprocessed ingredient that can be added in addition to or in lieu of the three main ingredients:

- For structure, there is Pug, EJS, Webpack-HTML-Plugin, ...
- For presentation, there is SASS, CSS-Modules, PostCSS, StyledCSS, ...
- For behaviour, there is Preact, React, VueJS, ...

After a roller coaster ride of evaluating various bundlers (Gulp, ParcelJS, ...), we have settled on Webpack as our toolchain. However, this decision should not preclude the use of other tools or toolchain in order to build a progressive web app (PWA).

Regardless of the functional and non-functional requirements that drive the adoption of any of the above stock, we want an organization that allows us the ability to quickly get to where we need to. To that end, we have the following structure at the top level...
```console
project-name
├── app                     //<- application source (ES6, JSX, SCSS, ...)
├── build                   //<- generated and bundled files ready for deployment
├── cfg                     //<- webpack build pipeline parts and setup
├── lib                     //<- external libraries installed locally in source form (see ATTRIBUTION.md)
├── LICENSE                 //<- license file; for code that is meant to be shared, I recommend ISC, MIT or BSD.
├── package.json            //<- metadata relevant to the project
├── README.md               //<- high level overview and getting started instructions
└── web                     //<- web related assets to be bundled along with code in app and lib folders
```

### Webpack ###
```console
cfg/
├── babel.js
├── development.js
├── eslint.js
├── optimize.js
├── setup.js
├── styles.js
└── webpack.js
```

