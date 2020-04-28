import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUsers } from './../actions';

const UsersLists = ({ users, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <div className="userlist">
      <ul className="userlist__list">
        {users.map((user, index) => {
          return (
            <Link to={`/users/${user.id}`} className="userlist__list__item">
              <p className="userlist__list__text">
                <span className="userlist__list__text--firstname">
                  First Name
                </span>
                {`${user.first_name}`}
                <span className="userlist__list__text--lastname">
                  Last Name
                </span>
                {`${user.last_name}`}
              </p>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

UsersLists.propTypes = {};

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps, { fetchUsers })(UsersLists);
