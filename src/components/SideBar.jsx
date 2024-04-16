import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetRole } from '../redux/actions';

export default function SideBar() {
    const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleResetRole = () => {
    dispatch(resetRole());
    localStorage.removeItem('role');
    navigate('/');
  };

  return (
    <div >
    <div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto   px-0 bg-black">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="custom-icon fs-5 d-none d-sm-inline">Menu</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="dashboard" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house custom-icon " ></i> <span className="custom-icon ms-1 d-none d-sm-inline">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="/register" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2 custom-icon" ></i> <span className="custom-icon ms-1 d-none d-sm-inline">Dashboard</span> </a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100 ">
                                <a href="/register" className="nav-link px-0 custom-icon"> <span className="custom-icon d-none d-sm-inline">Item</span> 1 </a>
                            </li>
                            <li>
                                <a href="/weeklyAttendance" className="nav-link px-0 custom-icon"> <span className="custom-icon d-none d-sm-inline">Item</span> 2 </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/attendance" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table custom-icon" ></i> <span className="custom-icon ms-1 d-none d-sm-inline">Attendance</span></a>
                    </li>
                    <li>
                        <a href="/" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <i className="fs-4 bi-bootstrap custom-icon" ></i> <span className="custom-icon ms-1 d-none d-sm-inline">Bootstrap</span></a>
                        <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="/" className="nav-link px-0"> <span className="custom-icon d-none d-sm-inline">Item</span> 1</a>
                            </li>
                            <li>
                                <a href="/" className="nav-link px-0"> <span className="custom-icon d-none d-sm-inline">Item</span> 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-grid custom-icon" ></i> <span className="custom-icon ms-1 d-none d-sm-inline">Products</span> </a>
                    </li>
                    <li>
                        <a href="/" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people custom-icon" ></i> <span className="custom-icon ms-1 d-none d-sm-inline">Customers</span> </a>
                    </li>
                </ul>
                <hr/>
                <div className="dropdown pb-4">
                    <a href="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle"/>
                        <span className="custom-icon d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="/">New project...</a></li>
                        <li><a className="dropdown-item" href="/">Settings</a></li>
                        <li><a className="dropdown-item" href="/">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" href="/"  onClick={handleResetRole}>Sign out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
  )
}
