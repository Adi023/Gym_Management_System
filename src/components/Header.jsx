import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import logo from '../../src/components/images/logo1.png'

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleScroll = () => {
    setShowNavbar(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
          <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '200px', height: '60px' }}>
            <Nav.Link href="/" active>
              HOME
            </Nav.Link>
            <Nav.Link href="/AboutUs">ABOUT US</Nav.Link>
            <Nav.Link href="/ContactUs">CONTACT US</Nav.Link>
            <NavDropdown title="LOGIN" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/AdminLogin">ADMIN LOGIN</NavDropdown.Item>
              <NavDropdown.Item href="/MemberLogin">MEMBER LOGIN</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/" disabled>
              LINK
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" aria-label="Search" />
            <Button variant="outline-success" type="submit" style={{ margin: "5px" }}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}