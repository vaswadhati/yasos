import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getLoggedUser } from 'api';

class AuthorizedRoute extends React.Component {
  componentWillMount() {
    getLoggedUser();
  }

  render() {
    const { component: Component, pending, logged, ...rest } = this.props;

    return (
      <Route {...rest} render={props => {
        if (pending) return <div>Loading...</div>;
        return logged
          ? <Component {...props} />
          : <Redirect to="/auth/login" />;
      }} />
    );
  }
}

AuthorizedRoute.propTypes /* remove-proptypes */ = {
  component: PropTypes.Component,
  pending: PropTypes.bool,
  logged: PropTypes.bool
};

const stateToProps = ({ loggedUserState }) => ({
  pending: loggedUserState.pending,
  logged: loggedUserState.logged,
});

export default connect(stateToProps)(AuthorizedRoute);
