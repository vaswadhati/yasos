import { h } from 'preact';
import PropTypes from 'prop-types';

import style from './header.scss';

export default function Header({ title, ...rest }) {
  return (
    <header class={style.header}>
      <h1>{title}</h1>
    </header>
  );
};

Header.propTypes /* remove-proptypes */ = {
  title: PropTypes.string
};
