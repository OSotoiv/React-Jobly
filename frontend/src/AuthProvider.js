import React, { useState, useEffect } from 'react';
import AuthContext from './AuthContext';
import JoblyApi from "./JoblyApi"

function AuthProvider(props) {
    const [user, setUser] = useState({});

    function setUserStorage(credentials) {
        localStorage.setItem("user", JSON.stringify(credentials))
        setUser({ ...credentials })
    }

    async function submitLogin(formData) {
        try {
            //comback to make this a parallel request
            const JWT = await JoblyApi.login(formData);
            const user = await JoblyApi.getUser(formData.username, JWT);
            setUserStorage({ ...user, token: JWT });

        } catch (e) {
            console.log(e);
        }
    }
    async function submitRegistration(formData) {
        try {
            //comback to make this a parallel request
            const JWT = await JoblyApi.register(formData);
            const user = await JoblyApi.getUser(formData.username, JWT);
            setUserStorage({ ...user, token: JWT });
        } catch (e) {
            console.log(e);
        }
    }
    function loginFromStorage() {
        const storedData = JSON.parse(localStorage.getItem("user"));
        if (storedData) {
            setUserStorage({ ...storedData });
        }
    }
    function logout() {
        localStorage.removeItem('user');
        setUser({});
    }
    useEffect(() => {
        if (user.username) {
            localStorage.setItem('user', JSON.stringify(user));
        }
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, submitLogin, submitRegistration, loginFromStorage, logout, setUser }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

// const [userCred, setUserCred] = useState({})