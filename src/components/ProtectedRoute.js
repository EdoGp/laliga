import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          fakeAuth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

ProtectedRoute.propTypes = {};

export default ProtectedRoute;
