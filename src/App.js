import React, { useState, useEffect } from "react";
// import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from "./components/AllRoutes";
import Header from "./components/Header";
import './App.css'
import Loading from "./components/Loading";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./components/SideBar";
// import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { resetRole } from "./redux/actions";
import { Button, Modal } from "react-bootstrap";

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

  const [showModal, setShowModal] = useState(false);

  const handleResetRole = () => {
    setShowModal(true); // Show confirmation modal
  };

  const confirmSignOut = () => {
    // Dispatch resetRole action and remove role from localStorage
    dispatch(resetRole());
    localStorage.removeItem('role');
    navigate('/');

    setShowModal(false); // Hide modal after sign out
  };

  const cancelSignOut = () => {
    setShowModal(false); // Hide modal if sign out is canceled
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
            <nav className="navbar navbar-expand-sm bg-black navbar-dark mr-3 justify-content-end">
              <button onClick={handleResetRole} className="btn btn-success ml-auto mr-3">SIGN OUT </button>
            </nav>
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
      <Modal show={showModal} onHide={cancelSignOut}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Sign Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to sign out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelSignOut}>
            Cancel
          </Button>
          <Button variant="success" onClick={confirmSignOut}>
            Sign Out
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;

