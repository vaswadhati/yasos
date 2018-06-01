import { h, render } from 'preact';

import { Header, Greetings } from './components';

// import main css file to get processed by sass and webpack
import 'web/normalize.css';
import style from './main.scss';

const aliens = [
  { name: 'Venusian', underline: false, we: true, make: false, contact: false },
  { name: 'Martian', underline: false, we: false, make: true, contact: false },
  { name: 'Jovian', underline: false, we: false, make: false, contact: true },
  { name: 'Earthling', underline: true, we: true, make: true, contact: true },
];

render((
  <div>
    <Header title="Preact + JSX + Webpack 4.x" />
    <div id="root" class={style.container}>
      {
        aliens.map(alien => <Greetings {...alien} />)
      }
    </div>
  </div>
), document.body, document.getElementById('root'));
