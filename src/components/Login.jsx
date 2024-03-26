import React, { useState } from 'react'
import Dashboard from './user/Dashboard';
import UserLogin from './user/UserLogin';

export default function Login() {

    const [role, setRole] = useState(null);

    const handleLogin = (userRole) => {
      setRole(userRole);
    };

  return (
    <div>{role ? (
        <Dashboard role={role} />
      ) : (
        <UserLogin onLogin={handleLogin} />
      )}
      
      {/* {role?(
        <Header role={role}/>
      ):(<Header/>)} */}
      </div>
  )
}
