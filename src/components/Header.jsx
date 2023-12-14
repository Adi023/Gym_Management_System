import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';



export default function Header() {
  return (
    <>

      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#"> G M S</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
            <Nav.Link href="/" active>
              Home
            </Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
            <NavDropdown title="Login" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/AdminLogin">AdminLogin</NavDropdown.Item>
              <NavDropdown.Item href="/MemberLogin">MemberLogin</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" aria-label="Search" />
            <Button variant="outline-success" type="submit" style={{margin: "5px"}}>
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}



{/* <ul>
<li><a href='/'>Home</a></li>
<li><a href='/AdminLogin'>Admin</a></li>
<li><a href='MemberLogin'>Member</a>
  {/* <a href="javascript:void(0)" classNameName="dropbtn">Dropdown</a>
  <div classNameName="dropdown-content">
    <a href="/">Link 1</a>
    <a href="/">Link 2</a>
    <a href="/">Link 3</a>
  </div> */}
// </li>
// </ul> */}