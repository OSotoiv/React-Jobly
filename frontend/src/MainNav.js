import React, { useState, useContext } from "react";
import {
    Navbar,
    Nav,
    Collapse,
    NavbarToggler,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import { NavLink } from 'react-router-dom';
import AuthContext from "./AuthContext";

function MainNav() {
    const { user, logout } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggleUserMenu = () => setDropdownOpen(!dropdownOpen);

    return (
        <div>
            <Navbar className="jobly-nav" expand="md">
                <NavLink to="/" className="navbar-brand">
                    Jobly
                </NavLink>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavLink className={"nav-link"} to="/companies">Companies</NavLink>
                        <NavLink className={"nav-link"} to="/jobs">Jobs</NavLink>
                        {user.username ?
                            <>
                                <Dropdown nav isOpen={dropdownOpen} toggle={toggleUserMenu}>
                                    <DropdownToggle nav caret>
                                        User
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem>
                                            <NavLink to="/">Dashboard</NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                            <NavLink onClick={logout}>Logout</NavLink>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </> :
                            <>
                                <NavLink className={"nav-link"} to="/register">Register</NavLink>
                                <NavLink className={"nav-link"} to="/login">Login</NavLink>
                            </>
                        }
                    </Nav>
                </Collapse>

            </Navbar>
        </div>
    );
}

export default MainNav;