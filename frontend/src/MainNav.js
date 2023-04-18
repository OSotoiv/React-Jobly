import React, { useState, useContext } from "react";
// import {  } from "react-router-dom";
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Collapse,
    NavLink,
    NavbarToggler
} from "reactstrap";
import userContext from './userContext';




//Nav Bar seen on all pages. 
function MainNav() {
    const { userToken } = useContext(userContext)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar expand="md">
                <NavbarBrand href="/" className="navbar-brand">
                    Jobly
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {userToken ?
                            <>
                                <NavItem>
                                    <NavLink href="/companies">Companies</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/jobs">Jobs</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/">User</NavLink>
                                </NavItem>
                            </> :
                            <>
                                <NavItem>
                                    <NavLink href="/register">Register</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/login">Login</NavLink>
                                </NavItem>
                            </>
                        }
                    </Nav>
                </Collapse>

            </Navbar>
        </div>
    );
}

export default MainNav;