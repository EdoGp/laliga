import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signIn, signOut } from './../actions';

const Auth = (props) => {
  return <div></div>;
};

Auth.propTypes = {};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(Auth);
