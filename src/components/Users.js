import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const Users = (props) => {
  let { id } = useParams();
  return <div>test user info {id}</div>;
};

Users.propTypes = {};

export default Users;
