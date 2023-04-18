import React from "react";
import { Route, Routes } from "react-router-dom";
// import {  } from "react-router";
//all the components
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Companies from './Companies'
import Jobs from './Jobs'
import User from './User'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/user" element={<User />} />
        </Routes>
    )
}

export default AllRoutes;