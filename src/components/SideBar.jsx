import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { resetRole } from '../redux/actions';
import ConfirmationModal from './ConfirmationModal';

export default function SideBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleResetRole = () => {
        setShowConfirmation(true);
    };

    const confirmResetRole = () => {
        // Execute the reset role logic
        dispatch(resetRole());
        localStorage.removeItem('role');
        navigate('/');
        setShowConfirmation(false);
    };

    const cancelResetRole = () => {
        setShowConfirmation(false);
    };
    let sidebarContent;
    const reduxRole = useSelector(state => state.role);
    switch (reduxRole) {
        case 'admin':
            sidebarContent = (
                <>
                  

                        <li className="nav-item">
                            <Link to="dashboard" className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house custom-icon " ></i> <span className="custom-icon ms-1 d-none d-sm-inline">Home</span>
                            </Link>
                        </li><hr style={{margin:'0px',color:'white',width:'100%'}}/>

                        {/* User Fields */}
                        <li>
                            <Link to="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi bi-people custom-icon"></i>
                                <span className="custom-icon ms-1 d-none d-sm-inline">Users</span>
                            </Link>
                            <ul className="collapse  nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                <li className="w-100">
                                    <Link to="/register" className="nav-link px-0 text-secondary text-hover-white">
                                        <i className=" bi bi-person-add "></i>
                                        <span className="d-none d-sm-inline"> Add</span></Link>
                                </li>
                                <li className="w-100">
                                    <Link to="/viewUsers" className="nav-link px-0 text-secondary text-hover-white">
                                    <i className="fa-solid fa-list"></i>
                                        <span className="d-none d-sm-inline"> View</span></Link>
                                </li>
                            </ul>
                        </li><hr style={{margin:'0px',color:'white',width:'100%'}}/>

                        {/* Employee Field */}
                        <li>
                            <Link to="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                <i className="fs-4 bi bi-people-fill custom-icon" ></i> <span className="custom-icon ms-1 d-none d-sm-inline">Staff</span>
                            </Link>
                            <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                <li className="w-100">
                                    <Link to="/addEmployee" className="nav-link px-0 text-secondary text-hover-white"> 
                                    <i className="bi bi-person-fill-add"></i>
                                    <span className="d-none d-sm-inline"> Add</span></Link>
                                </li>
                                <li className="w-100">
                                    <Link to="/viewEmployee" className="nav-link px-0 text-secondary text-hover-white">
                                    <i className=" bi bi-person-lines-fill "> </i> 
                                    <span className="d-none d-sm-inline">View</span> </Link>
                                </li>
                            </ul>
                        </li><hr style={{margin:'0px',color:'white',width:'100%'}}/>

                        {/* Attendance Fields */}
                        <li>
                            <Link to="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-table custom-icon" ></i>
                                <span className="custom-icon ms-1 d-none d-sm-inline">Attendance</span>
                            </Link>
                            <ul className="collapse  nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                                <li className="w-100">
                                    <Link to="/markAttendance" className="nav-link px-0 text-secondary text-hover-white">
                                    <i className="fas fa-calendar-check"></i>
                                        <span className=" d-none d-sm-inline"> Mark</span></Link>
                                </li>
                                <li className="w-100">
                                    <Link to="/viewAttendance" className="nav-link px-0 text-secondary text-hover-white">
                                    <i className="fas fa-clipboard-list"></i>
                                        <span className=" d-none d-sm-inline"> View</span></Link>
                                </li>
                            </ul>
                        </li><hr style={{margin:'0px',color:'white',width:'100%'}}/>

                        {/* Plans Fields */}
                        <li >
                            <Link to="#submenu4" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="fs-4  bi-grid custom-icon" ></i> 
                                <span className="custom-icon ms-1 d-none d-sm-inline">Plans</span>
                            </Link>
                            <ul className="collapse  nav flex-column ms-1" id="submenu4" data-bs-parent="#menu">
                                <li className="w-100">
                                    <Link to="/addPlan" className="nav-link px-0 text-secondary text-hover-white">
                                    <i className="fas fa-plus-circle"></i>
                                        <span className="d-none d-sm-inline"> Add</span></Link>
                                </li>
                                <li className="w-100">
                                    <Link to="/viewPlan" className="nav-link px-0 text-secondary text-hover-white">
                                    <i className="far fa-eye"></i>
                                        <span className="d-none d-sm-inline"> View</span></Link>
                                </li>
                                <li className="w-100">
                                    <Link to="/updatePlan" className="nav-link px-0 text-secondary text-hover-white">
                                    <i className="fas fa-edit"></i>
                                        <span className="d-none d-sm-inline"> Update</span></Link>
                                </li>
                            </ul>
                        </li><hr style={{margin:'0px',color:'white',width:'100%'}}/>

{/* Membership Fields */}
                        <li>
                            <Link to="#submenu5" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="bi bi-shield-fill-check fs-4 custom-icon"></i>
                                <span className="custom-icon ms-1 d-none d-sm-inline">Membership</span>
                            </Link>
                            <ul className="collapse  nav flex-column ms-1" id="submenu5" data-bs-parent="#menu">
                                <li className="w-100">
                                    <Link to="/addMembership" className="nav-link px-0 text-secondary text-hover-white">
                                  <i className="bi bi-shield-plus"></i>
                                        <span className=" d-none d-sm-inline"> Add</span></Link>
                                </li>
                                <li className="w-100">
                                    <Link to="/viewMemberships" className="nav-link px-0 text-secondary text-hover-white">
                                    <i className="bi bi-shield-exclamation"></i>
                                        <span className=" d-none d-sm-inline"> View</span></Link>
                                </li>
                            </ul>
                        </li><hr style={{margin:'0px',color:'white',width:'100%'}}/>


                        <li>
                            <Link to="/imageUploader" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-people custom-icon" ></i> <span className="custom-icon ms-1 d-none d-sm-inline">Image Test</span>
                            </Link>
                        </li><hr style={{margin:'0px',color:'white',width:'100%'}}/>
                   
                </>
            );
            break;
        case 'user':
            sidebarContent = (
                <>
                
                <li className="nav-item">
                            <Link to="dashboard" className="nav-link align-middle px-0">
                                <i className="fs-4 bi-house custom-icon " ></i> 
                                <span className="custom-icon ms-1 d-none d-sm-inline">Home</span>
                            </Link>
                </li>
                <hr style={{margin:'0px',color:'white',width:'100%'}}/>

                {/* User Fields */}
                <li>
                            <Link to="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi bi-people custom-icon"></i>
                                <span className="custom-icon ms-1 d-none d-sm-inline">Profile</span>
                            </Link>
                            <ul className="collapse  nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                <li className="w-100">
                                    <Link to="/register" className="nav-link px-0 text-secondary text-hover-white">
                                        <i className=" bi bi-person-add "></i>
                                        <span className="d-none d-sm-inline"> Add</span></Link>
                                </li>
                                {/* <li className="w-100">
                                    <Link to="/viewUsers" className="nav-link px-0 text-secondary text-hover-white">
                                    <i className="fa-solid fa-list"></i>
                                        <span className="d-none d-sm-inline"> View</span></Link>
                                </li> */}
                            </ul>
                           
                </li>
                <hr style={{margin:'0px',color:'white',width:'100%'}}/>

                <li>
                            <Link to="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi bi-people custom-icon"></i>
                                <span className="custom-icon ms-1 d-none d-sm-inline">Membership</span>
                            </Link>
                            <ul className="collapse  nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                                <li className="w-100">
                                    <Link to="/" className="nav-link px-0 text-secondary text-hover-white">
                                        <i className=" bi bi-person-add "></i>
                                        <span className="d-none d-sm-inline">Details</span></Link>
                                </li>
                            </ul>
                </li>
                <hr style={{margin:'0px',color:'white',width:'100%'}}/>
                </>
            );
            break;
        case 'manager':
            sidebarContent = (
                <>

                </>
            );
            break;
        case 'employee':
            sidebarContent = (
                <>

                </>
            );
            break;

        default:
            <>

            </>
            break;
    }

    return (
        <div >
            <ConfirmationModal
                show={showConfirmation}
                onHide={cancelResetRole}
                onConfirm={confirmResetRole}
                message="Are you sure you want to Sign Out?"
            />
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className=" sidewidth  px-0 bg-black" >
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <Link to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="custom-icon fs-5 d-none d-sm-inline">Menu</span>
                    </Link>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            {sidebarContent}
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
                                    <li><Link className="dropdown-item" to="/viewSingleUser">Profile</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link className="dropdown-item" onClick={handleResetRole}>Sign out</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
