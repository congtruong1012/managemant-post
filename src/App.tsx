import React from 'react';
import { CommonLayout } from './components/CommonLayout';
import { Login } from './components/Features/Login';
import { Route } from 'react-router-dom';
import { NotFound } from './components/CommonLayout/NotFound';

function App() {
  return (
    <React.Fragment>
      <Route path="/admin">
        <CommonLayout />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </React.Fragment>
  );
}

export default App;
