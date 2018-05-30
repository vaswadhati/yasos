import { h } from 'preact';
import {css} from 'emotion';
import PropTypes from 'prop-types';

import {header} from './header-style';

export default function Header({ title, ...rest }) {
  return (
    <header class={css`${header}`}>
      <h1>{title}</h1>
    </header>
  );
};

Header.propTypes /* remove-proptypes */ = {
  title: PropTypes.string
};
