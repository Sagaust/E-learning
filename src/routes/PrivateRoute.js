// src/routes/PrivateRoute.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  );
}

export default PrivateRoute;
