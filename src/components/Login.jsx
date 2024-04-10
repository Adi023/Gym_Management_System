import React, { useState } from 'react'
import Dashboard from './user/Dashboard';
import UserLogin from './user/UserLogin';

export default function Login() {

    const [role, setRole] = useState();
   
    
    const handleLogin = (userRole) => {
      setRole(userRole);
      // localStorage.setItem('role', userRole);

    };
    
    // useEffect(() => {
    //   const storedRole = localStorage.getItem('role');
    //   if (storedRole) {
    //     setRole(storedRole);
    //   }
    // }, []);
    

  return (
    <div>{role? (
        <Dashboard role={role} />
      ) : (
        <UserLogin onLogin={handleLogin} />
      )}
      </div>
  )
}
