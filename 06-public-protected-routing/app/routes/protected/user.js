import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

// Sub Layouts
import UserNav from 'components/user/nav';
import BrowseUsersPage from 'components/user';
import AddUserPage from 'components/user/add';
import UserProfilePage from 'components/user/profile';

import './index.scss';

const UserSubLayout = ({ match }) => (
  <div className="user-sub-layout">
    <aside>
      <UserNav />
    </aside>
    <div className="primary-content">
      <Switch>
        <Route path={match.path} exact component={BrowseUsersPage} />
        <Route path={`${match.path}/add`} exact component={AddUserPage} />
        <Route path={`${match.path}/:userId`} component={UserProfilePage} />
      </Switch>
    </div>
  </div>
);

UserSubLayout.propTypes /* remove-proptypes */ = {
  match: PropTypes.object
};

export default UserSubLayout;
