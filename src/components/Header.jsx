import React, { useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css';
import logo from '../../src/components/images/logo1.png'
import { useDispatch, useSelector } from 'react-redux';
import { resetRole } from '../redux/actions';
import { Link, useNavigate } from 'react-router-dom';

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

    case 'admin':
      navContent = (
        <Navbar  bg="black" variant="dark" expand="lg" >
           <Nav className="me-auto my-2 my-lg-0 ">
            <Link onClick={handleResetRole} className="nav-link"><i className="bi bi-power"></i> LOGOUT</Link>
          {/* <h1>Welcome Admin</h1> */}
        </Nav>
        </Navbar>
       
      );
      break;

    case 'user':
      navContent = (
        <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll navHeight" >
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/AboutUs" className="nav-link">ABOUT US</Link>
          <Link to="/ContactUs" className="nav-link">CONTACT US</Link>
          <Link onClick={handleResetRole} className="nav-link"><i className="bi bi-power"></i> LOGOUT</Link>
          {/* <h1>Welcome User..!!</h1> */}
        </Nav>
      );
      break;

    case 'manager':
      navContent = (
        <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll navHeight" >
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/AboutUs" className="nav-link">ABOUT US</Link>
          <Link to="/ContactUs" className="nav-link">CONTACT US</Link>
          <Link onClick={handleResetRole} className="nav-link"><i className="bi bi-power"></i> LOGOUT</Link>
          {/* <h1>Welcome Manager</h1> */}
        </Nav>
      );
      break;

    default:
      navContent = (
        <Navbar bg="black" variant="dark" expand="lg" >
        {/* bg="rgba(0, 0, 0, 0.7)" <Navbar.Brand href="/"><i className='fas fa-dumbbell' style={{ fontSize: '28px', color: ' rgb(153, 225, 20)' }}>GMS</i></Navbar.Brand> */}
        <Navbar.Brand as={Link} to="/" >
          <img src={logo} alt="Logo" width="50" height="50" style={{ borderRadius: '50px', marginLeft: '30px' }} />
          {/* <h5 style={{ fontSize: '20px', color: ' rgb(153, 225, 20)', marginLeft: '38px' }}>GMS</h5> */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

         

          <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll navHeight" >
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/AboutUs" className="nav-link">ABOUT US</Link>
          <Link to="/ContactUs" className="nav-link">CONTACT US</Link>
          <Link to="/register" className="nav-link">REGISTER</Link>
          <Link to="/login" className="nav-link">LOGIN</Link>
        </Nav>

        </Navbar.Collapse>
      </Navbar>
      );
      break;
  }

  return (
    <> 
    {navContent}
      

    </>
  );
}