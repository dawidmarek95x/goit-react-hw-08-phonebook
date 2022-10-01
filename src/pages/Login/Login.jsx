import React from 'react';
import { LoginForm } from './Login.styled';

const Login = () => {
  return (
    <LoginForm>
      <h2>Login</h2>
      <form>
        <div>  
          <label>
            E-mail
            <input 
              type="email" 
              name="email"
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
