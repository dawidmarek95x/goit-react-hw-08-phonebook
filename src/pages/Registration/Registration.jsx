import React from 'react';
import { useSignupMutation } from 'services/phonebookApi';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { warningNotify } from 'utils/notifications';
import Cookies from 'js-cookie';
import { addUser } from 'redux/slices/userSlice';
import { addToken } from 'redux/slices/tokenSlice';
import { RegistrationForm } from './Registration.styled';

const Registration = () => {
  const [signup] = useSignupMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = async e => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const name = `${firstName} ${lastName}`;
    const email = form.email.value;
    const password = form.password.value;
    const passwordConfirm = form.passwordConfirm.value;

    if (password !== passwordConfirm) {
      return warningNotify('Password and password confirmation do not match!');
    }

    const credentials = { name, email, password };
    await signup(credentials)
      .unwrap()
      .then(({ token, user: { email, name } }) => {
        Cookies.set('token', token);
        if (token) {
          dispatch(addUser({ email, name }));
        }
      })
      .catch(() => {
        warningNotify('User with this email address already exists!');
      });

    const token = await Cookies.get('token');
    if (token === undefined) {
      return;
    }

    await dispatch(addToken(token));
    await navigate('/contacts');
    form.reset();
  };

  return (
    <>
      <RegistrationForm>
        <h2>Registration</h2>
        <form onSubmit={submitHandler}>
          <div>
            <label>
              First name
              <input type="text" name="firstName" required />
            </label>
          </div>
          <div>
            <label>
              Last name
              <input type="text" name="lastName" required />
            </label>
          </div>
          <div>
            <label>
              E-mail
              <input
                type="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                autoComplete="email"
                required
              />
            </label>
          </div>
          <div>
            <label>
              Password
              <input
                type="password"
                name="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one uppercase and lowercase letter, one number and at least 8 or more characters"
                autoComplete="new-password"
                required
              />
            </label>
          </div>
          <div>
            <label>
              Confirm password
              <input
                type="password"
                name="passwordConfirm"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one uppercase and lowercase letter, one number and at least 8 or more characters"
                autoComplete="new-password-confirm"
                required
              />
            </label>
          </div>
          <button type="submit">Sign up</button>
        </form>
      </RegistrationForm>
    </>
  );
};

export default Registration;
