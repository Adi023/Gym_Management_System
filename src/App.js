import React, { useState, useEffect } from "react";
// import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from "./components/AllRoutes";
import Header from "./components/Header";
import './App.css'
import Loading from "./components/Loading";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "./components/SideBar";
// import { Nav, Navbar } from "react-bootstrap";
import AxiosErrorHandler from "./components/AxiosErrorHandler";
import { matchPath, useNavigate } from "react-router-dom";
import { resetRole } from "./redux/actions";
import ConfirmationModal from "./components/ConfirmationModal";
import ErrorBoundary from './ErrorBoundary'; // Adjust the path as needed
import InvalidUrlPage from "./components/InvalidUrlPage";
import validRoutes from "./components/routes";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { ErrorBoundary } from 'react-error-boundary'

function MyFallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [invalidUrl, setInvalidUrl] = useState(false);

  const handleInvalidUrl = () => {
    const pathname = window.location.pathname;
  
    // Check if the URL matches any valid route
    const isValid = validRoutes.some(validRoute => {
      return matchPath({ path: validRoute, end: true }, pathname);
    });
  
    if (!isValid) {
      setInvalidUrl(true);
    }
  };


  let appjsContent;

  useEffect(() => {
    // Simulate loading for 1 seconds
    // handleLogin();
    handleInvalidUrl();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleResetRole = () => {
    setShowConfirmation(true);
  };

  const confirmResetRole = () => {
    // Execute the reset role logic
    dispatch(resetRole());
    localStorage.removeItem('role');
    navigate('/login');
    toast.info("Logged Out Successfuly")
    setShowConfirmation(false);
  };

  const cancelResetRole = () => {
    setShowConfirmation(false);
  };

  const role = useSelector(state => state.role);
  // console.log(role+"app");

  switch (role) {
    case 'admin':
    case 'user':
    case 'manager':
    case 'employee':
      appjsContent = <>
        {invalidUrl ? (
          <InvalidUrlPage />
        ) : (
          <div className="d-flex sideSc">
            <div className="sidebar">
              <SideBar />
            </div>
            <div className="content">
              {/* <nav className="navbar navbar-expand-sm bg-black navbar-dark mr-3 justify-content-end">
                <button onClick={handleResetRole} className="btn btn-success ml-auto mr-3">SIGN OUT</button>
              </nav> */}
              <ErrorBoundary>
                <AxiosErrorHandler>
                  <AllRoutes />
                </AxiosErrorHandler>
              </ErrorBoundary>
            </div>
          </div>
        )}
      </>
      break;
    default:
      appjsContent = <>
        {invalidUrl ? (
          <InvalidUrlPage />
        ) : (
          <>
            <Header role={role} />
            <ErrorBoundary
              FallbackComponent={MyFallbackComponent}
              onReset={() => {
                // reset the state of your app here
              }}
              resetKeys={['someKey']}
            >
              <AllRoutes />
            </ErrorBoundary>
          </>
        )}
      </>
      break;
  }
  return (
    <div className="App">
  <ToastContainer theme="colored" />



      {isLoading ? (
        <Loading />
      ) : (
        <>
          {appjsContent}
        </>
      )}
      <ConfirmationModal
        show={showConfirmation}
        onHide={cancelResetRole}
        onConfirm={confirmResetRole}
        message="Are you sure you want to Sign Out?"
      />
    </div>
  );
}

export default App;