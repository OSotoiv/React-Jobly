import React, { useState } from 'react';
import './App.css';
import AllRoutes from './AllRoutes'
import MainNav from './MainNav';
import AuthProvider from './AuthProvider';

function App() {


  return (
    <div className="App">
      <AuthProvider>
        <MainNav />
        <AllRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
