import React from 'react';

const Registration = () => {
  return (
    <div>
      <h2>Registration</h2>
      <form>
        <div>  
          <label>
            First name
            <input 
              type="text" 
              name="firstName"
              placeholder="Enter your first name"
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
              placeholder="Enter your last name"
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
              placeholder="Enter your e-mail"
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
              placeholder="Enter your password"
              required
            />
          </label>
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Registration;
