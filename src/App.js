import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './components/Home';
import UsersList from './components/UsersLists';
import Users from './components/Users';

import ProtectedRoute from './components/ProtectedRoute';

function App({ isSignedIn }) {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/users'>Users</Link>
            </li>
            {!isSignedIn && (
              <li>
                <Link to='/login'>Login</Link>
              </li>
            )}
            {isSignedIn && (
              <li>
                <Link to='/logout'>Logout</Link>
              </li>
            )}
          </ul>
        </nav>
        <Switch>
          <ProtectedRoute exact path='/users'>
            <UsersList />
          </ProtectedRoute>

          <ProtectedRoute exact path='/users/:id'>
            <Users />
          </ProtectedRoute>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, {})(App);
