import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// import Switch from 'react-router-dom/Switch';
// import Route from 'react-router-dom/Route';
// import Redirect from 'react-router-dom/Redirect';

// Pages
import LoginPage from 'components/login';

import style from './index.scss';

const UnauthorizedLayout = () => (
  <div className={style['unauthorized-layout']}>
    {/*

    Imagine this could be a general layout for all unauthorized pages like
    the login page, forgot password, email-verified, etc...

    For this example project, we'll just have a Login Page

    */}
    <Switch >
      <Route path="/auth/login" component={LoginPage} />
      <Redirect to="/auth/login" />
    </Switch >
  </div >
);

export default UnauthorizedLayout;
