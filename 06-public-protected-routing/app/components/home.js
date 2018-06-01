import React from 'react';
import PropTypes from 'prop-types';

import { logout } from 'api';

const AppHomePage = ({ history }) => (
  <div>
    App Home Page
    <br /><br />
    <button onClick={() => {
      logout().then(() => {
        history.push('/');
      });
    }}>Logout</button>
  </div>
);

AppHomePage.propTypes /* remove-proptypes */ = {
  history: PropTypes.Array
};

export default AppHomePage;
