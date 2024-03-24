import React from 'react'
import UserLogin from './UserLogin';

export default function RenderRole() {
    const [role, setRole] = useState(null);

    const handleLogin = (userRole) => {
      setRole(userRole);
    };
  
    return (
      <div>
        {role ? (
          <Dashboard role={role} />
        ) : (
          <UserLogin onLogin={handleLogin} />
        )}
      </div>
  )
}