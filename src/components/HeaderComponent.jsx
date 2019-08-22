import React, {useState} from 'react';
import { Navbar, Nav, NavItem, Button, Collapse, NavbarToggler } from 'reactstrap';
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

const Header = ({isAuthenticated}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Navbar color="dark" dark expand="md">
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg"></span> Home
                            </NavLink>
                        </NavItem>
                        { 
                            isAuthenticated ?
                                <NavItem>
                                    <NavLink className="nav-link" to="/todo-list">
                                        <span className="fa fa-list fa-lg"></span> TODO list
                                    </NavLink>
                                </NavItem>
                            :
                                null
                        }
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <SignInOutButton isAuthenticated={isAuthenticated} />
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    )
}

export default Header;
