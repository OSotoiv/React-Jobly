import React, { useState } from 'react';
import './App.css';
// import AllRoutes from './AllRoutes'
import MainNav from './MainNav';
// import { BrowserRouter } from "react-router-dom";
// import AuthProvider from './AuthProvider';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Companies from './Companies'
import Jobs from './Jobs'
import User from './User'
import Company from './Company'

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <MainNav user={user} />
        <Routes>
          <Route exact="true" path="/" Component={Home} />

          <Route path="/register" element={<Register setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />

          <Route path="/companies" element={<Companies user={user} setUser={setUser} />} />
          <Route path="/companies/:handle" element={<Company user={user} setUser={setUser} />} />
          <Route path="/jobs" element={<Jobs user={user} setUser={setUser} />} />
          <Route path="/jobs/:id" element={<Jobs user={user} setUser={setUser} />} />
          <Route path="/user" element={<User user={user} setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
