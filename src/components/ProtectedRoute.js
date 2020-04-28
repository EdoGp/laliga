import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Switch, Route, Link, Redirect, useHistory, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ isSignedIn, children, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          isSignedIn ? (
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

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, {})(ProtectedRoute);
