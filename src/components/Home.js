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
    <div className="home__component">
      <form onChange={handleForm} className="form">
        <div className="form__group">
          <input
            type="email"
            id="email"
            value={loginForm.email}
            className="form__input"
          />
          <label htmlFor="email" className="form__label">
            Email
          </label>
        </div>
        <div className="form__group">
          <input
            type="password"
            id="password"
            value={loginForm.password}
            className="form__input"
          />
          <label htmlFor="password" className="form__label">
            Password
          </label>
        </div>
        <button className="btn" onClick={handleClick}>
          Login
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.users };
};

export default connect(mapStateToProps, { signIn })(Home);
