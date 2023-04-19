import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Companies from './Companies'
import Jobs from './Jobs'
import User from './User'
import Company from './Company'

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/:handle" element={<Company />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:id" element={<Jobs />} />
            <Route path="/user" element={<User />} />
        </Routes>
    )
}

export default AllRoutes;