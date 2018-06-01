import React from 'react';
import PropTypes from 'prop-types';

const UserProfilePage = ({ match }) => (
  <div>
    User Profile for user: {match.params.userId}
  </div>
);

UserProfilePage.propTypes /* remove-proptypes */ = {
  match: PropTypes.object
};

export default UserProfilePage;
