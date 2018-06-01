Yet Another Set of Starters
===========================
Starter kits for progressive web apps span the spectrum of useless and stale to useful but bloated with the kitchen sink included. For anyone coming to the world of modern web development, especially from a C/C++ background, it can be frustrating - so close to getting something done and yet so much void in understanding how it all comes together.

To be sure, there are excellent articles written on each befuddling topic. They even provide working sample code. The issue however is in web development world, things move at break neck speed and break backward compatibility often. Leaving the article and the accompanying source stale, sometimes in a matter of weeks.

Why Yasos
---------
Yasos was inspired by the urge to [solve my god damn problem](https://mxstbr.blog/2017/02/creating-open-source-projects/). The problem was with me spending way too much time googling the same sh\*t over and over again. I endup looking for the same stuff that I had found a solution for just a week or month ago. More importantly, stuff that was relevant a month ago is no longer relevant because one or more dependencies have broken backward compatibility - so the hunt for an answer starts over.

The solution is two fold. First, create my own repository of knowledge acquired from hours of googling and second, **maintain** that knowledge. Yasos captures my learning and tries hard to *keep pace with the changes* in the core stack and build tools. Think of it as a set of examples with a long term support (*LTS*) for as long as I remain interested in the web.

To address the kitchen sink problem, I created a series of starters. Each starter tries to be complete with a minimal set of concepts. And then build on top of such minimal sets to create a more complete starter all the way up to a reasonably complex web app.

The List of Starters
====================
Each starter will ideally contain a minimal set of concepts required to get a job done. There are tradeoffs. I want each to be useful but not bloated or overwhelming. Only with usage and feedback we can tell if those requirements have been met.

NOTE: all starters are by design meant to be run only on those browsers that are most current with the standards. Chrome and Safari issues will get higher priority than the rest.

What can you do with it?
------------------------
You can check out each starter's README file to get an understanding of what job it accomplishes. If that is the job you need to get done then simply use it and provide feedback to make it better. The README also provides a collection of links for further reading. Bear in mind that these links and the code references may have become stale, but the concepts or techniques should still be relevant. The starter itself should be functional. The status column provides an indication of whether it is keeping pace with the rest of the changes in the web development or not.

> My larger point is to think about why we chose to use a library, framework,
> or pattern. Sometimes we create a problem for ourselves just so we can try
> something new. That is perfectly fine and its how we learn but just know that
> the context of that decision is everything. From my experience, the better
> route is to learn about this new thing and gain some understanding of the
> context of its use but do not force it but rather wait for a situation to
> arise when it is needed. Just be patient.
>
> -- <cite>Kye Hohenberger (https://github.com/emotion-js/emotion/issues/113#issuecomment-357045927)</cite>

A starter that has 'LTS' status indicates that I will aim to keep the code on the bleeding edge of the stack for at least a year. I know that is not quite the same meaning for 'LTS' elsewhere. An 'EOL' status means that no more time will be spent in upgrading the dependencies to the latest and in future it may be removed.

| #  | Name           | Focus area                                     | Status |
|----|----------------|------------------------------------------------|--------|
| 01 | vanilla        | get started with webpack 4.x and ES6           | LTS    |
| 02 | wtf-jsx        | get to know jsx using preact                   | LTS    |
| 03 | css-in-js      | exploring css-in-js using preact               | EOL    |
| 04 | css-scope      | css modules, local and global scopes           | WIP    |
| 05 | simple-routing | first encounter with react router              | WIP    |
| 06 | more-routing   | public, protected and private routes           | WIP    |
| 07 | code-split     | code-split, dynamic import                     | TBD    |
| 08 | kanban-app     | react, redux, css-transitions                  | TBD    |

Code organization common to all starters
----------------------------------------
How code is organized is typically a function of project's scope and its objectives. In the case of a web app there are bewildering set of choices and complex decisions to be made. A web app consists of three main ingredients - HTML5 (for structure), CSS3(for presentation) and ES6(for behavior) - and a toolchain to mix them up.

These three can be combined and cooked in at least a dozen different ways. Depending on the complexity of the project we may need 'stock' and here again there are dozens of 'stock' to choose from and for each of the main ingredients.

The 'stock' represents any precooked or preprocessed ingredient that can be added in addition to or in lieu of the three main ingredients:

- For structure, there is Pug, EJS, Webpack-HTML-Plugin, ...
- For presentation, there is SASS, CSS-Modules, PostCSS, StyledCSS, ...
- For behaviour, there is Preact, React, VueJS, ...

NOTE: some of the 'stock' can enhance all three ingredients.

After a roller coaster ride of evaluating various bundlers (Gulp, ParcelJS, ...), we have settled on Webpack as our toolchain. However, this decision does not preclude the use of others  when needed.

Regardless of the functional and non-functional requirements that drive the adoption of any of the above stock, we want an organization that allows us the ability to quickly get to where we need to. To that end, we have the following structure at the top level...

```console
project-name
├── build          //<- generated and bundled files ready for deployment
├── LICENSE        //<- for code that is meant to be shared, I recommend ISC, MIT or BSD.
├── package.json   //<- metadata relevant to the project
├── README.md      //<- high level overview and getting started instructions
└── src            //<- 'code' including configuration goes here
```

All 'code' (including configuration to build the code) is kept under 'src' folder...

```console
src
├── api            //<- remote service facade used by the app goes here
├── app            //<- application source (ES6, JSX, SCSS, ...)
├── cfg            //<- webpack build pipeline parts and setup
├── doc            //<- notes, design documents, requirements go here
├── lib            //<- [optional] external libraries in source form (see ATTRIBUTION.md)
├── store          //<- [optional] contains state of the application
└── web            //<- web related assets to be bundled along with code in app and lib folders
```

### Webpack ###
Webpack configuration files are kept under 'cfg' folder and is organized as a collection of parts that are merged together by webpack.js which is given as the entry point to webpack.

```console
cfg/
├── babel.js       //<- for transpiling
├── development.js //<- used in development mode
├── eslint.js      //<- lint code
├── optimize.js    //<- used in production mode (optimize, minify, ...)
├── setup.js       //<- tell webpack where things are
├── styles.js      //<- to process css and sass
└── webpack.js     //<- kickstart webpack using this arrangement
```

### Application ###
Application code is kept under 'app' folder. At a minimum it contains a main.js which typically contains the 'shell' of a PWA. Depending on the scope of the project it may contain 'routes', 'components', 'style' and perhaps more as needed.

```console
app
├── components     //<- used by the app
├── main.js        //<- app shell
├── routes         //<- are pages or containers in a flow
└── style          //<- app wide look and feel *may* go here
```
### Application State ###
The global state of an application is kept under 'store' folder. It is optional and is present only when an application requires complex state management.

### Web Assets ###
HTML, templates, images, icons and other visual and structural assets are kept in the 'web' folder. These are copied to the 'build' folder during the build process.

```console
web
├── assets
├── index.ejs
:
└── manifest.json
```

### Third party libraries ###
External libraries used in source form are kept under 'lib' folder. The ATTRIBUTION.md file contains a list of such libraries used by the application and in what form. NOTE: this is an optional folder and may not be present for simple applications.

```console
lib
├── ATTRIBUTION.md //<- FOSS packages that are used by the app are listed here
├── site-css       //<- site or app wide look & feel style could go here
:
└── tiny           //<- tiny library that you create to prevent bloat goes here
```
