import React, {  useEffect } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import logo from '../../src/components/images/logo1.png'
import { useDispatch, useSelector } from 'react-redux';
import { resetRole } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

// import { useNavigate  } from 'react-router-dom';

export default function Header() {
  // const [showNavbar, setShowNavbar] = useState(false);
  // className={showNavbar ? 'fixed-top' : ''}
  const role = useSelector(state => state.role);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleResetRole = () => {
    dispatch(resetRole());
    localStorage.removeItem('role');
    navigate('/');
  };

  // const handleScroll = () => {
  //   setShowNavbar(window.scrollY > 150);
  // };

  useEffect(() => {
    // window.addEventListener('scroll', handleScroll);
    return () => {
      // window.removeEventListener('scroll', handleScroll);
    };
  }, []);
let navContent;

switch (role) {

    case 'admin' :
      navContent=(
        <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll navHeight" >
              <Nav.Link href="/" active>HOME</Nav.Link>
              <Nav.Link href="/AboutUs">ABOUT US</Nav.Link>
              <Nav.Link href="/ContactUs">CONTACT US</Nav.Link>
              <NavDropdown title="LOGIN" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/login">LOGIN</NavDropdown.Item>
                <NavDropdown.Item href="/viewUsers">View Users</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
              </NavDropdown>
              <button onClick={handleResetRole}>Logout</button>
              <h1>Welcome Admin</h1>
            </Nav>
      );
      break;

      case 'user':
    navContent = (
      <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll navHeight" >
      {/* <Nav.Link href="/" active>HOME</Nav.Link>
      <Nav.Link href="/AboutUs">ABOUT US</Nav.Link>
      <Nav.Link href="/ContactUs">CONTACT US</Nav.Link>
      <Nav.Link href="/register">REGISTER</Nav.Link> */}
      <button onClick={handleResetRole}>Logout</button>
      <h1>Welcome User..!!</h1>
    </Nav>
    );
    break;

    case 'manager':
      navContent = (
        <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll navHeight" >
        <Nav.Link href="/" active>HOME</Nav.Link>
        <Nav.Link href="/AboutUs">ABOUT US</Nav.Link>
        <Nav.Link href="/ContactUs">CONTACT US</Nav.Link>
        <Nav.Link href="/register">REGISTER</Nav.Link>
        <button onClick={handleResetRole}>Logout</button>
        <h1>Welcome Manager..!!</h1>
      </Nav>
      );
      break;

  default:
    navContent=(
      <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll navHeight" >
            <Nav.Link href="/" active>HOME</Nav.Link>
            <Nav.Link href="/AboutUs">ABOUT US</Nav.Link>
            <Nav.Link href="/ContactUs">CONTACT US</Nav.Link>
            <NavDropdown title="LOGIN" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/login">LOGIN</NavDropdown.Item>
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
          </Nav>
    );
    break;
}

  return (
    <>
      <Navbar  bg="black" variant="dark" expand="lg" >
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