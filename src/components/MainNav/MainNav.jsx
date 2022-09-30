import React from 'react'
import { Header, Link } from './MainNav.styled';

function MainNav() {
  return (
    <Header>
      <nav>
        <ul>
          <li>
            <Link to="/" end>Home</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/register">Sign up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </Header>
  )
}

export default MainNav