import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UsersLists = (props) => {
  return (
    <div>
      test users list
      <nav>
        <ul>
          <li>
            <Link to='/users/1'>Users1</Link>
          </li>
          <li>
            <Link to='/users/2'>Users2</Link>
          </li>
          <li>
            <Link to='/users/3'>Users3</Link>
          </li>
          <li>
            <Link to='/users/4'>Users4</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

UsersLists.propTypes = {};

export default UsersLists;
