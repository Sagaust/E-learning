// src/routes/PublicRoute.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../context/UserContext';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { user } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={props =>
        user && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PublicRoute;
