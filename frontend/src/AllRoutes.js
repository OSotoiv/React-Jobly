import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Register from './Register';
import Login from './Login';
import Companies from './Companies'
import Company from './Company'
import Jobs from './Jobs'
import Job from './Job'
import User from './User'


const AllRoutes = () => {
    return (
        <Routes>
            <Route exact="true" path="/" Component={Home} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/:handle" element={<Company />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/jobs/:id" element={<Job />} />
            <Route path="/user" element={<User />} />
        </Routes>
    )
}

export default AllRoutes;