import React, { useState, useEffect } from "react";
// import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from "./components/AllRoutes";
import Header from "./components/Header";
import './App.css'
import Loading from "./components/Loading";
import { useSelector } from "react-redux";

function App() {
  const [isLoading, setIsLoading] = useState(true);
 
  useEffect(() => {
    // Simulate loading for 1 seconds
    // handleLogin();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const role = useSelector(state => state.role);
  console.log(role+"app");

  return (

    
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
       <>
        {/* <Router> */}
          {/* Header should be included inside Router to access routing functionality */}
          <Header role={role} />
          <AllRoutes />
        {/* </Router> */}
        </>
      )}
    </div>
  );
}

export default App;

