import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser, deleteUser, updateUser } from './../actions';
import { Link } from 'react-router-dom';

const Users = ({ fetchUser, user, deleteUser, updateUser }) => {
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });
  let { id } = useParams();

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const onEditClick = () => {
    setEdit((prevState) => {
      return !prevState;
    });
  };

  const onSaveClick = () => {
    updateUser(id, form);
    setEdit(false);
  };

  const onDeleteClick = () => {
    deleteUser(id);
    setEdit(false);
  };

  useEffect(() => {
    fetchUser(id);
  }, [fetchUser, id]);

  useEffect(() => {
    if (user.length > 0) {
      setForm({
        first_name: user[0].first_name,
        last_name: user[0].last_name,
        email: user[0].email,
      });
    }
  }, [user]);

  return (
    <div className="userdetails">
      <div className="userdetails__buttons">
        <button className="btn" onClick={onDeleteClick}>
          Delete
        </button>
        {!edit && (
          <button className="btn" onClick={onEditClick}>
            Edit
          </button>
        )}
        {edit && (
          <button className="btn" onClick={onSaveClick}>
            Save
          </button>
        )}
        {edit && (
          <button
            className="btn"
            onClick={() => {
              setEdit(false);
            }}
          >
            Cancel
          </button>
        )}
      </div>
      {user[0] && (
        <div className="userdetails__info">
          {!edit && (
            <>
              <div className="userdetails__info__text">
                <span className="userdetails__info__text--label">
                  Fist name
                </span>
                <span className="userdetails__info__text--value">
                  {user[0].first_name}
                </span>
              </div>
              <div className="userdetails__info__text">
                <span className="userdetails__info__text--label">
                  Last name
                </span>
                <span className="userdetails__info__text--value">
                  {user[0].last_name}
                </span>
              </div>
              <div className="userdetails__info__text">
                <span className="userdetails__info__text--label">email</span>
                <span className="userdetails__info__text--value">
                  {user[0].email}
                </span>
              </div>
            </>
          )}{' '}
          {edit && (
            <form className="form" onChange={handleFormChange}>
              <div>
                <input
                  className="form__input"
                  type="text"
                  value={form.first_name}
                  onChange={handleFormChange}
                  id="first_name"
                />
                <label htmlFor="first_name" className="form__label">
                  First Name
                </label>
              </div>
              <div className="form__group">
                <input
                  className="form__input"
                  type="text"
                  value={form.last_name}
                  onChange={handleFormChange}
                  id="last_name"
                />
                <label htmlFor="last_name" className="form__label">
                  Last Name
                </label>
              </div>
              <div className="form__group">
                <input
                  className="form__input"
                  type="email"
                  value={form.email}
                  onChange={handleFormChange}
                  id="email"
                />
                <label htmlFor="email" className="form__label">
                  Email
                </label>
              </div>
            </form>
          )}
        </div>
      )}
      <Link className="btn-link" to={`/users`}>
        Back
      </Link>
    </div>
  );
};

Users.propTypes = {};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { fetchUser, updateUser, deleteUser })(
  Users
);
