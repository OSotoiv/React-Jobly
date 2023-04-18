import React, { useState } from 'react';
import './App.css';
import AllRoutes from './AllRoutes'
import MainNav from './MainNav';
import userContext from './userContext';

function App() {
  const [userToken, setUserToken] = useState('')

  return (
    <div className="App">
      <userContext.Provider value={{ userToken, setUserToken }}>
        <MainNav />
        <AllRoutes />
      </userContext.Provider>
    </div>
  );
}

export default App;
