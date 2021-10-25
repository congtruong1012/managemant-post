import React, { useEffect } from 'react';
import { CommonLayout } from './components/CommonLayout';
import { Login } from './components/Features/Login';
import { Route } from 'react-router-dom';
import { Switch, useLocation, useHistory } from 'react-router';
import { NotFound } from './components/CommonLayout/organisms/NotFound';

function App() {
  const { pathname } = useLocation();
  const { push } = useHistory();
  useEffect(() => {
    if (pathname === '/') push('/admin');
  }, []);
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/admin">
        <CommonLayout />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default App;
