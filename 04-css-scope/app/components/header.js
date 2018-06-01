import style from './header.scss';

import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ title, ...rest }) {
  return (
    <header className={style.header}>
      <h1>{title}</h1>
    </header>
  );
};

Header.propTypes /* remove-proptypes */ = {
  title: PropTypes.string
};
