import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// import NavLink from 'react-router-dom/NavLink';
// import withRouter from 'react-router-dom/withRouter';

import PropTypes from 'prop-types';

import style from 'components/user/index.scss';

const UserNav = ({ match }) => (
  <nav>
    <NavLink to={`${match.path}`} exact activeClassName={style.active}>Browse</NavLink>
    <NavLink to={`${match.path}/add`} activeClassName={style.active}>Add</NavLink>
  </nav>
);

UserNav.propTypes /* remove-proptypes */ = {
  match: PropTypes.object
};

export default withRouter(UserNav);
