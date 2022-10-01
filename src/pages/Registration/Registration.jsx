import React from 'react';
import { RegistrationForm } from './Registration.styled';

const Registration = () => {
  return (
    <RegistrationForm>
      <h2>Registration</h2>
      <form>
        <div>  
          <label>
            First name
            <input 
              type="text" 
              name="firstName"
              required
            />
          </label>
        </div>
        <div>  
          <label>
            Last name
            <input 
              type="text" 
              name="lastName"
              required
            />
          </label>
        </div>
        <div>  
          <label>
            E-mail
            <input 
              type="email" 
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
              required
            />
          </label>
        </div>
        <div>  
          <label>
            Confirm password
            <input 
              type="password" 
              name="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one uppercase and lowercase letter, one number and at least 8 or more characters"
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
