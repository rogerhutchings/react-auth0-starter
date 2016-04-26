import React from 'react';
import { Route } from 'react-router';

import Login from '../containers/Login';
import { login } from '../actions';
import { LOCK } from '../../../config';


const loginRoutes = store => {
  const getToken = (nextState, replace, callback) => {
    const authHash = LOCK.parseHash(window.location.hash);
    const { dispatch } = store;

    // If there's no authHash, then carry on to login page
    if (!authHash) {
      return callback();
    }

    // Throw an error if there is one, and continue to the login page
    if (authHash && authHash.error) {
      console.error('Error logging in', authHash.error);
      return callback();
    }

    // Finally, attempt a login if we have an authHash. Note that this doesn't
    // block rendering: we check in the login page component if we're loading
    // auth data or not.
    dispatch(login(authHash.id_token));
    callback();
  };

  return (
    <Route path="login" component={Login} onEnter={getToken} />
  );
};

export default loginRoutes;







// export default function loginRoutes(store) {
//   const { dispatch, getState } = store;
//   const authData = getState().auth.data;

//   const attemptLogin = (nextState, replace, callback) => {

//     const authHash = LOCK.parseHash(window.location.hash);

//     // If there's no authHash, then carry on to login page
//     if (!authHash) {
//       return callback();
//     }

//     // Throw an error if there is one, and continue to the login page
//     if (authHash && authHash.error) {
//       console.error('Error logging in', authHash.error);
//       return callback();
//     }

//     // Finally, attempt a login if we have an authHash. Note that this doesn't
//     // block rendering: we check in the login page component if we're loading
//     // auth data or not.
//     dispatch(login(authHash.id_token));
//     return callback();
//   };

//   return (
//     <Route path="login" component={Login} onEnter={attemptLogin} />
//   );
// };
