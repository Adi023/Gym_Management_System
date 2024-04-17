import React, { useState, useEffect } from "react";
// import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from "./components/AllRoutes";
import Header from "./components/Header";
import './App.css'
import Loading from "./components/Loading";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./components/SideBar";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { resetRole } from "./redux/actions";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  let appjsContent;
  useEffect(() => {
    // Simulate loading for 1 seconds
    // handleLogin();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleResetRole = () => {
    dispatch(resetRole());
    localStorage.removeItem('role');
    navigate('/');
  };
  const role = useSelector(state => state.role);
  // console.log(role+"app");

  switch (role) {
    case 'admin':
    case 'user':
    case 'manager':
    case 'employee':
      appjsContent = (
      <div className="d-flex">
        <div className="sidebar">
          <SideBar />
        </div>
        
        <div className="content">
          <Navbar bg="black" variant="dark" expand="lg"  >
            <Nav className="me-auto my-2 my-lg-0 align-items-start">
              <Link onClick={handleResetRole} className="nav-link"><i className="bi bi-power"></i> LOGOUT</Link>
            </Nav>
          </Navbar>
          <AllRoutes />
        </div>
      </div>
      )
      break;
    default:
      appjsContent = (
        <>
          <Header role={role} />
          <AllRoutes />
        </>
      )
      break;
  }
  return (


    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {appjsContent}
        </>
      )}
    </div>
  );
}

export default App;

