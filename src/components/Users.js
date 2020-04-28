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
    <>
      <button onClick={onDeleteClick}>Delete</button>
      {!edit && <button onClick={onEditClick}>Edit</button>}
      {edit && <button onClick={onSaveClick}>Save</button>}
      {edit && (
        <button
          onClick={() => {
            setEdit(false);
          }}>
          Cancel
        </button>
      )}
      {user[0] && (
        <>
          {!edit && (
            <div>
              <div>
                <span>Fist name</span>
                <span>{user[0].first_name}</span>
              </div>
              <div>
                <span>Last name</span>
                <span>{user[0].lastt_name}</span>
              </div>
              <div>
                <span>email</span>
                <span>{user[0].email}</span>
              </div>
            </div>
          )}{' '}
          {edit && (
            <form onChange={handleFormChange}>
              <label htmlFor=''>First Name</label>
              <input type='text' value={form.first_name} onChange={handleFormChange} id='first_name' />
              <label htmlFor=''>Last Name</label>
              <input type='text' value={form.last_name} onChange={handleFormChange} id='last_name' />
              <label htmlFor=''>Email</label>
              <input type='email' value={form.email} onChange={handleFormChange} id='email' />
            </form>
          )}
        </>
      )}
      <Link to={`/users`}>Back</Link>
    </>
  );
};

Users.propTypes = {};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { fetchUser, updateUser, deleteUser })(Users);
