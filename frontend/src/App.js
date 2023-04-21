import React, { useEffect, useContext } from 'react';
import './App.css';
import AllRoutes from './AllRoutes'
import MainNav from './MainNav';
import AuthContext from './AuthContext';


function App() {

  const { loginFromStorage } = useContext(AuthContext);
  useEffect(() => {
    loginFromStorage()
  }, [])

  return (
    <div className="App">
      <MainNav />
      <div className='main-container'>
        <AllRoutes />
      </div>
    </div>
  );
}

export default App;
