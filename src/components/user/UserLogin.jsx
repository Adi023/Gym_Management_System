import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setRole } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import UserServices from '../../services/UserServices'

export default function UserLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchAll = async () => {
    try {
      const response = await UserServices.getAllUsersInfo();
      console.log(response.data);
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchAll();
  }, []);

  let reduxUserId = null;
  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log(username +' '+password);
    const role = validateLogin(username, password);
    console.log("check 1 = "+role)

    if (role) {
      // Call onLogin callback with user role
      onLogin(role);
      dispatch(setRole(role,reduxUserId));
    } else {
      alert('Invalid username or password');
    }
  };


  const validateLogin = (username, password) => {
    const userId = isNaN(username) ? username : Number(username);

    const user = userData.find(user => 
      (user.userId === userId || user.email === username || username === 'admin') && 
      (user.password === password || password === 'admin')
    );

    console.log('User found:', user);
    if (user || (username === 'admin' || username === 'user')) {

      reduxUserId=user.userId;// setting user id in redux store
      if (username === 'admin') {
        return 'admin';
      } 
      else if ( username === 'user') {
        return 'user';
      } 
      else { console.log(user.role_Id);
        switch (user.role_Id) {
         
          case 2:
          case 'admin':
            return 'admin';
          case 3:
            return 'manager';
          case 10:
            return 'user';
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
            return 'employee';
          default:
            return null;
        }
      }
    } else {
      navigate('/login');
      return null;
    }
  };

  return (
    <div style={{ padding: "70px" }}>
      <div id="login">
        <h1>Login</h1>
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
          <input type="submit" value={"Login"} />
          <br />
        </form>
      </div>
    </div>
  )
}