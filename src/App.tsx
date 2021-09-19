import React, { useState } from 'react';
import { CommonLayout } from './components/CommonLayout';
import { Posts } from './components/Features';
import { Login } from './components/Features/Login';
// import { useLocation } from 'react-router-dom'
function App() {
  // const { pathname } = useLocation()
  const [isLogin, setIsLogin] = useState(false)
  return isLogin ? (
    <CommonLayout setIsLogin={setIsLogin} >
      <Posts />
    </CommonLayout>) : (<Login setIsLogin={setIsLogin} />)

}

export default App;
