import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = ({ children, redirectPath = '/login' }) => {
  const token = useSelector(state => state.token);
  if (!token) {
    return <Navigate to={redirectPath} replace/>
  }

  return children ? children : <Outlet />
};

PrivateRoute.propTypes = {
  children: PropTypes.element,
  redirectPath: PropTypes.string,
};

export default PrivateRoute;
