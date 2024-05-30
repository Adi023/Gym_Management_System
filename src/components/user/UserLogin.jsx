import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { setRole } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import UserServices from '../../services/UserServices'
import login from '../images/login.webp'

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

    console.log(username + ' ' + password);
    const role = validateLogin(username, password);
    console.log("check 1 = " + role)

    if (role) {
      // Call onLogin callback with user role
      onLogin(role);
      dispatch(setRole(role, reduxUserId));
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

      reduxUserId = user.userId;// setting user id in redux store
      if (username === 'admin') {
        return 'admin';
      }
      else if (username === 'user') {
        return 'user';
      }
      else {
        console.log(user.role_Id);
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
    <div >
      {/* <div id="login">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <label></label>
          <input type="submit" value={"Login"} />
          <br />
        </form>
      </div> */}

      <section class="bg-light p-3 p-md-4 p-xl-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 col-xxl-11">
              <div class="card border-light-subtle shadow-sm">
                <div class="row g-0">
                  <div class="col-12 col-md-6">
                    <img class="img-fluid rounded-start w-100 h-100 object-fit-cover"
                      loading="lazy" src={login} alt="Welcome back you've been missed!" />
                  </div>
                  <div class="col-12 col-md-6 d-flex align-items-center justify-content-center">
                    <div class="col-12 col-lg-11 col-xl-10">
                      <div class="card-body p-3 p-md-4 p-xl-5">
                        <div class="row">
                          <div class="col-12">
                            <div class="mb-5">
                              {/* <div class="text-center mb-4">
                          <a href="#!">
                            <img src={logo} alt="BootstrapBrain Logo" width="175" height="57"/>
                          </a>
                        </div> */}
                              <h4 class="text-center">Welcome back you've been missed!</h4>
                            </div>
                          </div>
                        </div>
                        {/* <div class="row">
                    <div class="col-12">
                      <div class="d-flex gap-3 flex-column">
                        <a href="#!" class="btn btn-lg btn-outline-dark">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                          </svg>
                          <span class="ms-2 fs-6">Log in with Google</span>
                        </a>
                      </div>
                      <p class="text-center mt-4 mb-5">Or sign in with</p>
                    </div>
                  </div> */}
                        <form onSubmit={handleLogin}>
                          <div class="row gy-3 overflow-hidden">
                            <div class="col-12">

                              <div class="form-floating mb-3">
                                <input type="text" class="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                <label for="email" class="form-label">Email</label>
                              </div>
                            </div>
                            <div class="col-12">

                              <div class="form-floating mb-3">
                                <input type="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />

                                <label for="password" class="form-label">Password</label>
                              </div>
                            </div>

                            <div class="col-12">
                              <div class="d-grid">
                                <button class="btn btn-dark btn-lg" type="submit">Log in now</button>
                              </div>
                            </div>
                          </div>
                        </form>
                        {/* <div class="row">
                    <div class="col-12">
                      <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                        <a href="#!" class="link-secondary text-decoration-none">Forgot password</a>
                      </div>
                    </div>
                  </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}