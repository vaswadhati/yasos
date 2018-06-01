import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import PrimaryHeader from 'components/header';
import AppHomePage from 'components/home';

// Sub Layouts
import UserSubLayout from './user';
import ProductSubLayout from './product';

import './home.scss';

const PrimaryLayout = ({ match }) => (
  <div className="primary-layout">
    <PrimaryHeader />
    <main>
      <Switch>
        <Route path={`${match.path}`} exact component={AppHomePage} />
        <Route path={`${match.path}/users`} component={UserSubLayout} />
        <Route path={`${match.path}/products`} component={ProductSubLayout} />
        <Redirect to={`${match.url}`} />
      </Switch>
    </main>
  </div>
);

PrimaryLayout.propTypes /* remove-proptypes */ = {
  match: PropTypes.object
};

export default PrimaryLayout;
