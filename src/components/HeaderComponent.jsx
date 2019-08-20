import React, {useState} from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Button, Collapse, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const SignInOutButton = ({ isAuthenticated }) =>
    isAuthenticated ? 
        <Button>
            <span className="fa fa-sign-out fa-lg"></span> Log out
        </Button>
    :
        <NavLink to="/login">
            <Button>  
                <span className="fa fa-sign-in fa-lg"></span> Log in
            </Button>
        </NavLink>

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand className="mr-auto" href="/">
                    <h4 className="mb-0 mr-5">TODO LIST</h4>
                </NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg"></span> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/todo-list">
                                <span className="fa fa-list fa-lg"></span> TODO list
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <SignInOutButton isAuthenticated={false} />
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}

export default Header;
