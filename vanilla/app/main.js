import { Header, Greetings } from './components';

// import main css file to get processed by sass and webpack
import 'web/normalize.css';
import style from './main.scss';

// This starter gets your feet wet by touching lightly on the following:
//
// - a taste of css grid
// - fat arrow and functional render components
// - use of document fragment to avoid triggering
//   rendering dom during construction phase
const element = document.getElementById('root'); // assuming ul exists
const fragment = document.createDocumentFragment();

const aliens = [
  { name: 'Venusian', underline: false, we: true, make: false, contact: false },
  { name: 'Martian', underline: false, we: false, make: true, contact: false },
  { name: 'Jovian', underline: false, we: false, make: false, contact: true },
  { name: 'Earthling', underline: true, we: true, make: true, contact: true },
];

// TODO:
// - check if the fragement needs to be cloned before appending
//   ```javascript
//   fragment.appendChild(greeting.content.cloneNode(true))
//   ```
const template = document.createElement('template');

template.innerHTML = Header({ title: 'Plain Vanilla JS + Webpack 4.x' });
fragment.appendChild(template.content);

template.innerHTML = `<div id='root' class='${style.container}'/>`;
fragment.appendChild(template.content);

aliens.forEach((alien) => {
  template.innerHTML = Greetings(alien);
  fragment.getElementById('root').appendChild(template.content);
});

element.parentNode.replaceChild(fragment, element);
