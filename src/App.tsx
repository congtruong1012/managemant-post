import React from 'react';
import { CommonLayout } from './components/CommonLayout';
import { Login } from './components/Features/Login';
import { useLocation } from 'react-router-dom'
import { Route } from 'react-router-dom'
import routes from './routes';
function App() {
  const { pathname } = useLocation()

  return pathname !== '/login' ? (
    <CommonLayout>
      {routes.map((item, index) => <Route key={String(index)} {...item} />)}
    </CommonLayout>
  ) : (<Login />)

}

export default App;
