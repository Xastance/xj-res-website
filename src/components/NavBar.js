import { useState } from 'react';
import { Briefcase, CodeSlash, Envelope, Person } from 'react-bootstrap-icons';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
    Collapse,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
} from 'reactstrap';
import Logo from '../assets/logo/logo.svg';

function NavBar(args) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar {...args}>
                <NavbarBrand tag={RRNavLink} to="/" className="d-flex align-items-center">
                    <div className="rounded-circle bg-light d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>
                        <img src={Logo} alt="logo" className="rounded" width="30" height="30" />
                    </div>
                    <span className="ms-2 pb-1">My Resume</span>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />

                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink className="link-light" tag={RRNavLink} to="/about">
                                <Person className="m-1" size={20}/>
                                About Me
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="link-light" tag={RRNavLink} to="/experience">
                                <Briefcase className="m-1" size={20}/>
                                Experience
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="link-light" tag={RRNavLink} to="/projects">
                                <CodeSlash className="m-1" size={20}/>
                                Projects
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="link-light" tag={RRNavLink} to="/contact">
                                <Envelope className="m-1" size={20}/>
                                Contact
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;
