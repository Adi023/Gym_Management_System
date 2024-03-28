import React, { useState, useEffect } from "react";
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
          <Header role={role}/>
          <AllRoutes />
        </>
      )}
    </div>
  );
}

export default App;

