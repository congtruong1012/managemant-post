import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import jwt from 'jwt-decode';

export const PrivateRoute = (props: RouteProps) => {
  const token = localStorage.getItem('token');
  const verifyToken = token && jwt(token);

  if (!token || !verifyToken) return <Redirect to="/login" />;
  return <Route {...props} />;
};
