import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import "./Header.css";

const Header = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="no-column-nav" color="light" light expand="md">
      	<a href="/#/bezos" className="mobile-header">
          <img 
            src="/img/logos/clip.png"
            className="header-logo"
          />
        </a>
        {/*<NavbarBrand href="/#/bezos">Bezos</NavbarBrand>*/}
        <NavbarToggler onClick={toggle} />
        <Collapse className="nav-go-right" isOpen={isOpen} navbar>
          <Nav className="no-auto" navbar>
            <NavItem>
              <NavLink href="/#/bezos/about/">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#/bezos/thought/">Thought & Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#/bezos/contact/">Contact Us</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Sign In
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <a className="dropdown-item" href="/#/bezos/login/">Log In</a>
                </DropdownItem>
                <DropdownItem>
                  <a className="dropdown-item" href="/#/bezos/login/" >Sign Up</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;