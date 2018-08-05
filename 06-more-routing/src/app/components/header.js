import React from 'react';
import { NavLink } from 'react-router-dom';
// import NavLink from 'react-router-dom/NavLink';

import style from './header.scss';

const PrimaryHeader = () => (
  <header className={style['primary-header']}>
    <h1>Welcome to our app!</h1>
    <nav>
      <NavLink to="/app" exact activeClassName={style.active}>Home</NavLink>
      <NavLink to="/app/users" activeClassName={style.active}>Users</NavLink>
      <NavLink to="/app/products" activeClassName={style.active}>Products</NavLink>
    </nav>
  </header>
);

export default PrimaryHeader;
