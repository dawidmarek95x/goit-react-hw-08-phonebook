import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToken } from 'redux/slices/tokenSlice';
import { useLoginMutation } from 'services/phonebookApi';
import { LoginForm } from './Login.styled';

const Login = () => {
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const submitHandler = evt => {
    const form = evt.target;
    const email = form.email.value;
    const password = form.password.value;

    const credentials = { email, password };
    evt.preventDefault();
    login(credentials)
      .unwrap()
      .then(data => dispatch(addToken(data)))
      .then(() => navigate('/contacts'))
      .catch(() => {
        alert('The given data is incorrect. Check your email and password.');
      });

    evt.target.reset();
  };

  return (
    <LoginForm>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label>
            E-mail
            <input type="email" name="email" autoComplete="email" required />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              required
            />
          </label>
        </div>
        <button type="submit">Log in</button>
      </form>
    </LoginForm>
  );
};

export default Login;
