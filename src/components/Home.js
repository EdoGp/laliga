import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from './../actions';

const Home = ({ signIn }) => {
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });

  const handleForm = (e) => {
    setLoginForm({ ...loginForm, [e.target.id]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    signIn(loginForm);
  };

  return (
    <div>
      <form onChange={handleForm}>
        <label htmlFor='email'>Email</label>
        <input type='email' id='email' value={loginForm.email} />
        <label htmlFor='password'>password</label>
        <input type='password' id='password' value={loginForm.password} />
        <button onClick={handleClick}>Login</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.users };
};

export default connect(mapStateToProps, { signIn })(Home);
