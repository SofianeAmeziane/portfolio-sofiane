import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import Link from 'next/link'

const Bslink = (props) =>{
    const {title,url} = props
    return(
        <Link href={url}>
                <a className='nav-link port-navbar-link'>
                    {title}
                </a>
         </Link>
    )
}
const Login = () => {
  return <a className='nav-link port-navbar-link' href='/api/V1/login'>Login</a>
}
const Logout = () => {
  return <a className='nav-link port-navbar-link' href='/api/V1/logout'>Logout</a>
}
function Inout(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <Logout />;
  }
  return <Login />;
}
const Header = ({user,loading,classNameheader}) => {
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
          <Nav className="mr-auto" >
            <NavItem className="port-navbar-item">
                <Bslink title="Home" url="/"/>
            </NavItem>
            <NavItem className="port-navbar-item">
                <Bslink title="About" url="/about"/>
            </NavItem>
            <NavItem className="port-navbar-item ">
                <Bslink title="Portfolios" url="/portfolios"/>
            </NavItem>
            <NavItem className="port-navbar-item">
                <Bslink title="Blogs" url="/Blogs"/>
            </NavItem>
            <NavItem className="port-navbar-item">
                <Bslink title="CV" url="/cv"/>
            </NavItem>
            <NavItem className="port-navbar-item">
                <Bslink title="Secret" url="/secret"/>
            </NavItem>
          </Nav>
          <Nav navbar>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;