import React, { useState } from 'react'
import Dashboard from './user/Dashboard';
import UserLogin from './user/UserLogin';
import { useSelector } from 'react-redux';

export default function Login() {

    const [role, setRole] = useState();
    const reduxRole = useSelector(state => state.role);
    // console.log(reduxRole+" HI " +role);

    const handleLogin = (userRole) => {
      setRole(userRole);
      // console.log("hi"+userRole);
    };
    if (role===undefined && reduxRole!=="default") {
      setRole(reduxRole);
    }


  return (
    <div>{role? (
        <Dashboard role={role} />
      ) : (
        <UserLogin onLogin={handleLogin} />
      )}
      </div>
  )
}
