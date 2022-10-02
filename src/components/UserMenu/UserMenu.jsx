import Cookies from 'js-cookie';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteToken } from 'redux/slices/tokenSlice';
import { useLogoutMutation } from 'services/phonebookApi';
import { Header, StyledLink } from './UserMenu.styled';

function UserMenu() {
  const token = useSelector((state) => state.token);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    await Cookies.remove('token');
    await logout()
    .then(() => dispatch(deleteToken()));
    await navigate('/login');
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
              <StyledLink as="button" onClick={logoutHandler}>
                Log out
              </StyledLink>
            </li>
          )}
        </ul>
      </nav>
    </Header>
  );
}

export default UserMenu;
