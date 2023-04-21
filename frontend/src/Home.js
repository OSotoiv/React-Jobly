import React, { useContext } from "react";
import Dashboard from "./Dashboard";
import AuthContext from "./AuthContext";

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <>{user.username
            ? <Dashboard />
            :
            <>
                <h1 className="text-center">Please Log in or Sign up</h1>
            </>
        }
        </>
    )
}
export default Home;