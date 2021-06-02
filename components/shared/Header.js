import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import Link from "next/link";
import { isAuthorized } from '@/utils/auth0';

const Bslink = (props) => {
  const { title, url, className='' } = props;
  return (
    <Link href={url}>
      <a className={`nav-link port-navbar-link ${className}`}>{title}</a>
    </Link>
  );
};
const Login = () => {
  return (
    <a className="nav-link port-navbar-link" href="/api/V1/login">
      Login
    </a>
  );
};
const Logout = () => {
  return (
    <a className="nav-link port-navbar-link" href="/api/V1/logout">
      Logout
    </a>
  );
};
const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dropdown
      className="port-navbar-link port-dropdown-menu"
      nav
      isOpen={isOpen}
      toggle={() => setIsOpen(!isOpen)}>
        <DropdownToggle className="port-dropdown-toggle" nav caret>
          Admin
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <Bslink
              className="port-dropdown-item"
              url="/portfolios/new"
              title="Create Portfolio"
            />
          </DropdownItem>
          <DropdownItem>
            <Bslink
              className="port-dropdown-item"
              url="/blogs/editor"
              title="Blog Editor"
            />
          </DropdownItem>
          <DropdownItem>
            <Bslink
              className="port-dropdown-item"
              url="/blogs/dashboard"
              title="Dashboard"
            />
          </DropdownItem>
        </DropdownMenu>
    </Dropdown>
  )
}
const Header = ({ user, loading, classNameheader }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar
        className={`port-navbar port-default absolute ${classNameheader}`}
        dark
        expand="md"
      >
        <NavbarBrand className="port-navbar-brand" href="/">
          Sofiane Amz
        </NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto">
            <NavItem className="port-navbar-item">
              <Bslink title="Home" url="/" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <Bslink title="About" url="/about" />
            </NavItem>
            <NavItem className="port-navbar-item ">
              <Bslink title="Portfolios" url="/portfolios" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <Bslink title="Blogs" url="/Blogs" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <Bslink title="CV" url="/cv" />
            </NavItem>
            {/* 
                <NavItem className="port-navbar-item">
                <Bslink title="Secret" url="/secret"/>
                </NavItem>
                <NavItem className="port-navbar-item">
                <Bslink title="SecretSSR" url="/secretssr"/>
                </NavItem>
                <NavItem className="port-navbar-item">
                <Bslink title="Admin" url="/onlyadmin"/>
                </NavItem>
                <NavItem className="port-navbar-item">
                <Bslink title="AdminSSR" url="/onlyadminssr"/>
                </NavItem>
            */}
          </Nav>
          <Nav>
            {!loading && (
              <>
                {user && (
                  <>
                  { isAuthorized(user, 'admin')  && <AdminMenu />} 
                  <NavItem className="port-navbar-item">
                    <Logout />
                  </NavItem>
                  </>
                )}
                {!user && (
                  <NavItem className="port-navbar-item">
                    <Login />
                  </NavItem>
                )}
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
