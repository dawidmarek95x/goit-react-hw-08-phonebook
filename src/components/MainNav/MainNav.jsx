import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteToken } from 'redux/slices/tokenSlice';
import { useLogoutMutation } from 'services/phonebookApi';
import { Header, StyledLink } from './MainNav.styled';

function MainNav() {
  const token = useSelector(state => state.token);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    logout()
      .then(() => dispatch(deleteToken()));
  };

  return (
    <Header>
      <nav>
        <ul>
          <li>
            <StyledLink to="/" end>
              Home
            </StyledLink>
          </li>
          {token && (
            <li>
              <StyledLink to="/contacts">Contacts</StyledLink>
            </li>
          )}
          {!token && (
            <li>
              <StyledLink to="/register">Sign up</StyledLink>
            </li>
          )}
          {!token && (
            <li>
              <StyledLink to="/login">Login</StyledLink>
            </li>
          )}
          {token && (
            <li>
              <StyledLink as={Link} to="/" onClick={logoutHandler}>
                Log out
              </StyledLink>
            </li>
          )}
        </ul>
      </nav>
    </Header>
  );
}

export default MainNav;
