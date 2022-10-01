import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteToken } from 'redux/slices/tokenSlice';
import { useLogoutMutation } from 'services/phonebookApi';
import { Header, Link } from './MainNav.styled';

function MainNav() {
  const token = useSelector(state => state.token);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    logout();
    navigate('/');
    dispatch(deleteToken());
  };

  return (
    <Header>
      <nav>
        <ul>
          <li>
            <Link to="/" end>
              Home
            </Link>
          </li>
          {token && (
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          )}
          {!token && (
            <li>
              <Link to="/register">Sign up</Link>
            </li>
          )}
          {!token && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {token && (
            <li>
              <Link to="/logout" onClick={logoutHandler}>
                Log out
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </Header>
  );
}

export default MainNav;
