import React, { useState } from 'react';
import AuthContext from './AuthContext';

function AuthProvider(props) {
    const [user, setUser] = useState({});
    const [token, setToken] = useState({});

    return (
        <AuthContext.Provider value={{ user, setUser, token, setToken }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

// const [userCred, setUserCred] = useState({})