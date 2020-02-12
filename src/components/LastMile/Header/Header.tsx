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
      	<a href="/#/lastmile" className="mobile-header">
          <img 
            src="/img/logos/clip.png"
            className="header-logo"
          />
        </a>
        {/*<NavbarBrand href="/#/lastmile">lastmile</NavbarBrand>*/}
        <NavbarToggler onClick={toggle} />
        <Collapse className="nav-go-right" isOpen={isOpen} navbar>
          <Nav className="no-auto" navbar>
            <NavItem>
              <NavLink href="/#/lastmile/about/">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#/lastmile/thought/">Thought & Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/#/lastmile/contact/">Contact Us</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Sign In
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <a className="dropdown-item" href="/#/lastmile/login/">Log In</a>
                </DropdownItem>
                <DropdownItem>
                  <a className="dropdown-item" href="/#/lastmile/login/" >Sign Up</a>
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