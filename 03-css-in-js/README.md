What the fish is CSS-in-JS?
===========================

Before moving on to build more complex applications, we need make a decision on how to style our application. The predominant choices are:
- plain CSS
- SASS with CSS-Modules
- CSS-in-JS

You can think of CSS-in-JS as a stock that enhances how you use the basic ingredient - which is css at core. The popular choices for css-in-js are:
- styled-components
- glamor
- glamorous
- polished
- emotion

In this starter, we explore css-in-js using emotion because at the lowest layer it focuses purely on using CSS without bringing in other dependencies such as React or Preact. It has support for those libraries as a seperate package and provide a path forward. Whereas style-components started with React and provide a path backward to be able to use only CSS. I believe those choices each library made has some impact and that emotion is a better choice if we want to remain view layer library agnostic.

Intentionally we stay away from advanced concepts such as offline first, service workers. We'll get to them further down the road.

NOTE: in this starter we are not going to use the 'styled' feature of emotion and instead focus only on how to use CSS-in-JS as a replacement for CSS-Modules.

Features
--------
* All the features of wtf-jsx minus css-modules
* css-in-js

Status
------
This starter is in EOL. The conversion from SASS+CssModules to CSS-in-JS is a non-trivial effort, as can be evidenced by diffing with '02-wtf-jsx' starter.

The effort expended during the conversion to CSS-in-JS for a simple project makes us think that CSS-in-JS is best suited for those workplaces where access to mastery over CSS **and** ES6 is readily available.

The other nagging feeling we get is that CSS-in-JS somehow breaks the seperation of concerns that is present in a traditional css design work flow. Designers do CSS best and developers do ES6 best. Getting people who are fluent in both domains will present a hiring challenge. Added to this challenge, any bug at the css-in-js layer leaves us exposed to an additional risk. With the simple SASS+CssModules approach, we can simply revert back to plain CSS based solution and keep moving.

As exciting and popular css-in-js might be, we do not see a big payoff for web applications. It probably makes sense if you are authoring a widget library that needs to integrate without breaking anything around it.

See recommended reading for the positive and negative view points.

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

- [usage patterns](https://github.com/emotion-js/emotion/issues/287)
- [rgba pita](https://caniuse.com/#feat=css-rrggbbaa)
- [hex color code for transparency](https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4)
- [global style variables with emotion](https://github.com/emotion-js/emotion/issues/618)
- https://github.com/emotion-js/emotion/blob/master/docs/composition.md

Recommended Reading
===================
Use the links in this section as a means to get an overview and a gentler
introduction to concepts, not as a reference. Go to the source for reference.

- https://medium.com/@wonderboymusic/a-field-guide-to-css-in-js-f7cbd9ed79a7
- https://medium.com/@gajus/stop-using-css-in-javascript-for-web-development-fa32fb873dcc

Go to the source
================
Spend sufficient time reading through these references. The payoff outweighs the hours you will spend googling for answers.

Emotion JS
----------
- https://emotion.sh/
- https://github.com/emotion-js/emotion
