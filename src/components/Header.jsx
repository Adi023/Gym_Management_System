import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import logo from '../../src/components/images/logo1.png'

export default function Header({role}) {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleScroll = () => {
    setShowNavbar(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
let navContent;

switch (role) {


    case 'default' :
      navContent=(
        <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '200px', height: '60px' }}>
              <Nav.Link href="/" active>HOME</Nav.Link>
              <Nav.Link href="/AboutUs">ABOUT US</Nav.Link>
              <Nav.Link href="/ContactUs">CONTACT US</Nav.Link>
              <NavDropdown title="LOGIN" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/login">LOGIN</NavDropdown.Item>
                <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                <NavDropdown.Item href="/viewUsers">View Users</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
            </Nav>
      );
      break;

      case 'user':
    navContent = (
      <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '200px', height: '60px' }}>
      <Nav.Link href="/" active>HOME</Nav.Link>
      <Nav.Link href="/AboutUs">ABOUT US</Nav.Link>
      <Nav.Link href="/ContactUs">CONTACT US</Nav.Link>
    </Nav>
    );
    break;

  default:
    navContent=(
      <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '200px', height: '60px' }}>
            <Nav.Link href="/" active>HOME</Nav.Link>
            <Nav.Link href="/AboutUs">ABOUT US</Nav.Link>
            <Nav.Link href="/ContactUs">CONTACT US</Nav.Link>
            <NavDropdown title="LOGIN" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/login">LOGIN</NavDropdown.Item>
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>
              <NavDropdown.Item href="/viewUsers">View Users</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
          </Nav>
    );
    break;
}

  return (
    <>
      <Navbar className={showNavbar ? 'fixed-top' : ''} bg="black" variant="dark" expand="lg" >
        {/* bg="rgba(0, 0, 0, 0.7)" <Navbar.Brand href="/"><i className='fas fa-dumbbell' style={{ fontSize: '28px', color: ' rgb(153, 225, 20)' }}>GMS</i></Navbar.Brand> */}
        <Navbar.Brand href="/" >
          <img src={logo} alt="Logo" width="60" height="60" style={{ borderRadius: '50px', marginLeft: '30px' }} />
          <h5 style={{ fontSize: '20px', color: ' rgb(153, 225, 20)', marginLeft: '38px' }}>GMS</h5>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          {navContent}
      
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}