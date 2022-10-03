import Cookies from 'js-cookie';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToken } from 'redux/slices/tokenSlice';
import { useLoginMutation } from 'services/phonebookApi';
import { LoginForm } from './Login.styled';

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async e => {
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const credentials = { email, password };
    e.preventDefault();
    await login(credentials)
      .unwrap()
      .then(({token}) => Cookies.set('token', token))
      .catch(() => {
        alert('The given data is incorrect. Check your email and password.');
      });

    const token = await Cookies.get('token');
    await dispatch(addToken(token));
    await navigate('/contacts');
    form.reset();
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
