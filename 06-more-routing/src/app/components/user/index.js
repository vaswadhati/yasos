import React from 'react';
import { Link } from 'react-router-dom';
// import Link from 'react-router-dom/Link';

import PropTypes from 'prop-types';

const BrowseUsersPage = ({ match }) => (
  <div class="shadow">
    <span>Browse Users</span>
    <ul>
      <li><Link to={`${match.path}/1`} className="link">Brad</Link></li>
      <li><Link to={`${match.path}/2`} className="link">Chris</Link></li>
      <li><Link to={`${match.path}/3`} className="link">Michael</Link></li>
      <li><Link to={`${match.path}/4`} className="link">Ryan</Link></li>
    </ul>
  </div >
);

BrowseUsersPage.propTypes /* remove-proptypes */ = {
  match: PropTypes.object
};

export default BrowseUsersPage;
