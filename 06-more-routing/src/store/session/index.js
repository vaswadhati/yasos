/**
 * In computing, a login session is the period of activity between
 * a user logging in and logging out of a (multi-user) system.
 */

const initialState = {
  pending: true,
  logged: false
};

// reducer begin...
const loggedUserReducer = (state = initialState, action) => {
  if (action.type === 'GET_LOGGED_USER') {
    return Object.assign({}, state, {
      pending: false
    });
  }

  if (action.type === 'SET_LOGGED_USER') {
    return Object.assign({}, state, {
      pending: false,
      logged: action.logged
    });
  }

  return state;
};

export default loggedUserReducer;
