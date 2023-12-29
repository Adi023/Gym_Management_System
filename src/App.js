import React, { useState, useEffect } from "react";
import AllRoutes from "./components/AllRoutes";
import Header from "./components/Header";
import './App.css'
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <Loading />
      ) : (
        // Your application content goes here
        <>
          <Header />
          <AllRoutes />
        </>
      )}
    </div>
  );
}

export default App;

