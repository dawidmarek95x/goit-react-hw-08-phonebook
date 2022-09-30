import React from 'react';

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
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
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
