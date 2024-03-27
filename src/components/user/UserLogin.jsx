import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setRole } from '../../redux/actions';

export default function UserLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    
    e.preventDefault();
    // Assuming you have a function to validate credentials and retrieve user role
    console.log(username +' '+password);
    const role = validateLogin(username, password);
    console.log(role);
    
    if (role) {
      // Call onLogin callback with user role
      onLogin(role);
      dispatch(setRole(role));
    } else {
      alert('Invalid username or password');
    }
  };


  const validateLogin = (username, password) => {
    // Example logic, replace with your actual validation
    if (username === 'admin' && password === 'admin') {
      return 'admin';
    } else if (username === 'manager' && password === 'manager') {
      return 'manager';
    } else if (username === 'user' && password === 'user') {
      return 'user';
    } else if (username === 'employee' && password === 'employee') {
      return 'employee';
    } else {
      return 'default';
    }
  };
  
  return (
    <div style={{padding:"70px"}}>
        <div id="login" >
      <h1 >Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <label></label>
        <input type="submit" value={"Login"}/>
      </form>
    
        </div>
    </div>
  )
}
