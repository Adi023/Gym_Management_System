import React, { useState, useEffect } from "react";
// import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from "./components/AllRoutes";
import Header from "./components/Header";
import './App.css'
import Loading from "./components/Loading";
import { useSelector } from "react-redux";
import SideBar from "./components/SideBar";

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

  const role = useSelector(state => state.role);
  // console.log(role+"app");

  switch (role) {
      case 'admin':
      case 'user':
      case 'manager':
      case 'employee':
      appjsContent= (
        <div className="d-flex">
        <div className="sidebar">
          <SideBar />
        </div>
        
          <div className="content">
            <AllRoutes />
          </div>
       
      </div>
      )
      break;
    default:
      appjsContent=(
        <AllRoutes/>
      )
      break;
  }
  return (


    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* Header should be included inside Router to access routing functionality */}
          <Header role={role} />
          {appjsContent}
        </>
      )}
    </div>
  );
}

export default App;

