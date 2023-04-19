import React, { useState } from "react";
import {
    Navbar,
    Nav,
    Button,
    NavbarBrand,
    Collapse,
    NavbarToggler
} from "reactstrap";
import { NavLink } from 'react-router-dom';
function MainNav({ user }) {
    // const { user } = useContext(AuthContext)
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
                    <Nav fill className="ml-auto" navbar>
                        {user.username ?
                            <>
                                <Button color="light">
                                    <NavLink className={"nav"} to="/companies">Companies</NavLink>
                                </Button>
                                <Button color="light">
                                    <NavLink to="/jobs">Jobs</NavLink>
                                </Button>
                                <Button color="light">
                                    <NavLink to="/">User</NavLink>
                                </Button>
                            </> :
                            <>
                                <Button color="light">
                                    <NavLink to="/register">Register</NavLink>
                                </Button>
                                <Button color="light">
                                    <NavLink to="/login">Login</NavLink>
                                </Button>
                            </>
                        }
                    </Nav>
                </Collapse>

            </Navbar>
        </div>
    );
}

export default MainNav;