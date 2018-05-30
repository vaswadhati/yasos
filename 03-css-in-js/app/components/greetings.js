import { h } from 'preact';
import {css} from 'emotion';
import PropTypes from 'prop-types';
import { cx } from 'tiny';

import {link, underline as cssUnderline, greeting} from './greetings-style';

// v.a:
// - make sure object rest and spread operators get transpiled correctly!
// - check the output to ensure that babel is *not* aggressively converting
//   everything to es5; we want things to remain in ES6 because we will only
//   be supporting modern browsers.
export default function Greetings({ name, underline, ...rest }) {
  const { we, make, contact } = { ...rest };
  const needsUnderline = cx([
    link, {
      [cssUnderline]: underline
    },
  ]);

  return (
    <section class={css`${greeting}`}>
      <h2>Greetings, {name}.</h2>
      <div class={needsUnderline}>
        {we ? 'we' : '❤'} {make ? 'make' : '❤'} {contact ? 'contact' : '❤'}!!
      </div>
    </section>
  );
};

Greetings.propTypes /* remove-proptypes */ = {
  name: PropTypes.string,
  underline: PropTypes.string
};
