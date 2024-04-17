import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
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
                    <div className=" sidewidth  px-0 bg-black" >
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="custom-icon fs-5 d-none d-sm-inline">Menu</span>
                            </Link>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <Link to="dashboard" className="nav-link align-middle px-0">
                                        <i className="fs-4 bi-house custom-icon " ></i> <span className="custom-icon ms-1 d-none d-sm-inline">Home</span>
                                    </Link>
                                </li>

                                {/* User Fields */}
                                <li>
                                    <Link to="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi bi-people custom-icon"></i>
                                        <span className="custom-icon ms-1 d-none d-sm-inline">User</span>
                                    </Link>
                                    <ul className="collapse  nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                        <li  className="w-100">
                                            <Link to="/register" className="nav-link px-0 custom-icon">
                                                <i className=" bi bi-person-add "></i>
                                                <span className="custom-icon d-none d-sm-inline"> Add</span></Link>
                                        </li>
                                        <li className="w-100">
                                            <Link to="/viewUsers" className="nav-link px-0 custom-icon">
                                                <i className=" bi bi-person-lines-fill "> </i>
                                                <span className="custom-icon d-none d-sm-inline"> View</span></Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* Attendance Fields */}
                                <li>
                                    <Link to="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-table custom-icon" ></i> 
                                        <span className="custom-icon ms-1 d-none d-sm-inline">Attendance</span>    
                                    </Link>
                                    <ul className="collapse  nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <Link to="/attendance" className="nav-link px-0 custom-icon">
                                                <i className=" bi bi-person-add "></i>
                                                <span className="custom-icon d-none d-sm-inline"> Home</span>
                                            </Link>
                                        </li>
                                        <li >
                                            <Link to="/markAttendance" className="nav-link px-0 custom-icon">
                                                <i className=" bi bi-person-add "></i>
                                                <span className="custom-icon d-none d-sm-inline"> Mark</span></Link>
                                        </li>
                                        <li >
                                            <Link to="/viewAttendance" className="nav-link px-0 custom-icon">
                                                <i className=" bi bi-person-lines-fill "> </i>
                                                <span className="custom-icon d-none d-sm-inline"> View</span></Link>
                                        </li>
                                    </ul>
                                </li>


                                <li>
                                    <Link to="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                        <i className="fs-4 bi-bootstrap custom-icon" ></i> <span className="custom-icon ms-1 d-none d-sm-inline">Bootstrap</span></Link>
                                    <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                        <li className="w-100">
                                            <Link to="/" className="nav-link px-0"> <span className="custom-icon d-none d-sm-inline">Item</span> 1</Link>
                                        </li>
                                        <li>
                                            <Link to="/" className="nav-link px-0"> <span className="custom-icon d-none d-sm-inline">Item</span> 2</Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <Link to="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-grid custom-icon" ></i> <span className="custom-icon ms-1 d-none d-sm-inline">Products</span> </Link>
                                </li>
                                <li>
                                    <Link to="/" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-people custom-icon" ></i> <span className="custom-icon ms-1 d-none d-sm-inline">Customers</span> </Link>
                                </li>
                            </ul>
                            <hr className="custom-icon" />
                            <div className="dropdown pb-4">
                                <Link to="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {/* <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle"/> */}
                                    <i className="bi bi-person-circle custom-icon" ></i>
                                    <span className="custom-icon d-none d-sm-inline mx-1">Admin</span>
                                </Link>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                    <li><Link className="dropdown-item" to="/">New project...</Link></li>
                                    <li><Link className="dropdown-item" to="/">Settings</Link></li>
                                    <li><Link className="dropdown-item" to="/">Profile</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link className="dropdown-item" to="/" onClick={handleResetRole}>Sign out</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
