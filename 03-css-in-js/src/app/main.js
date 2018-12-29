import { h, render } from 'preact';
import { css } from 'emotion';

import { Header, Greetings } from './components';

// import main css file to get processed by sass and webpack
import 'web/normalize.css';
import 'site-css/_vars';

import { container } from './main-style';
console.log('container: ', container);

const aliens = [
  { name: 'Venusian', underline: false, we: true, make: false, contact: false },
  { name: 'Martian', underline: false, we: false, make: true, contact: false },
  { name: 'Jovian', underline: false, we: false, make: false, contact: true },
  { name: 'Earthling', underline: true, we: true, make: true, contact: true },
];

render((
  <div>
    <Header title="CSS-in-JS + Preact + JSX + Webpack 4.x" />
    <div id="root" class={css`${container}`}>
      {
        aliens.map(alien => <Greetings {...alien} />)
      }
    </div>
  </div>
), document.body, document.getElementById('root'));
