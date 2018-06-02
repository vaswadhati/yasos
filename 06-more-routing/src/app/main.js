import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// help webpack with tree shaking stuff
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import BrowserRouter from 'react-router-dom/BrowserRouter';
// import Switch from 'react-router-dom/Switch';
// import Route from 'react-router-dom/Route';
// import Redirect from 'react-router-dom/Redirect';

import AuthorizedRoute from './routes/protected';
import PrimaryLayout from './routes/protected/home';

import UnauthorizedRoute from './routes/public';

import store from 'store';
import './main.scss';

const App = props => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={UnauthorizedRoute} />
        <AuthorizedRoute path="/app" component={PrimaryLayout} />
        <Redirect to="/auth" />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
