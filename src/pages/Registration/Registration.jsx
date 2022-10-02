import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSignupMutation } from 'services/phonebookApi';
import { RegistrationForm } from './Registration.styled';
import 'react-toastify/dist/ReactToastify.css';
import { warningNotify } from 'utils/Notifications/Notifications';
import { addToken } from 'redux/slices/tokenSlice';

const Registration = () => {
  const [signup] = useSignupMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = evt => {
    const form = evt.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const name = `${firstName} ${lastName}`;
    const email = form.email.value;
    const password = form.password.value;
    const passwordConfirm = form.passwordConfirm.value;

    if (password !== passwordConfirm) {
      return warningNotify('Password and password confirm are not the same!');
    }

    const credentials = { name, email, password };
    evt.preventDefault();
    signup(credentials)
      .unwrap()
      .then(data => dispatch(addToken(data)))
      .then(() => navigate('/contacts'))
      .catch(() => {
        alert('User with this email address already exists');
      });
    form.reset();
  };

  return (
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
  );
};

export default Registration;
