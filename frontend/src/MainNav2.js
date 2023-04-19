import React from "react";
import { NavLink } from 'react-router-dom';



//Nav Bar seen on all pages. 
function MainNav2({ user }) {
    return (
        <>
            <nav>
                <ul>
                    {user.username
                        ?
                        <>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/companies" >companies</NavLink>
                            </li>
                            <li>
                                <NavLink to="/jobs" >jobs</NavLink>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <NavLink to="/login" >login</NavLink>
                            </li>
                            <li>
                                <NavLink to="/register" >register</NavLink>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </>
    )
}

export default MainNav2;