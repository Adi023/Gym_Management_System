import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { resetRole } from '../redux/actions';
import ConfirmationModal from './ConfirmationModal';

export default function SideBar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showConfirmation, setShowConfirmation] = useState(false);

    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleResetRole = () => {
        setShowConfirmation(true);
    };

    const confirmResetRole = () => {
        // Execute the reset role logic
        dispatch(resetRole());
        localStorage.removeItem('role');
        navigate('/login');
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
                        <Link to="dashboard" className="nav-link align-middle px-0 py-1" >
                            <i className="fs-4 bi-house custom-icon " title="Home"></i> <span className={`custom-icon ms-1  ${isCollapsed ? 'd-none' : 'd-none d-sm-inline'}`}>Home</span>
                        </Link>
                    </li><hr style={{ margin: '0px', color: 'white', width: '100%' }} />

                    {/* User Fields */}
                    <li>
                        <Link to="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 py-1  align-middle">
                            <i className="fs-4 bi bi-people custom-icon" title="Users"></i>
                            <span className={`custom-icon ms-1  ${isCollapsed ? 'd-none' : 'd-none d-sm-inline'}`}>Users</span>
                        </Link>
                        <ul className="collapse  nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/register" className="nav-link px-0 py-1  text-secondary text-hover-white">
                                    <i className=" bi bi-person-add  custom-icon" title="Add Users"></i>
                                    {/* <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}> Add</span> */}
                                    <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}>Add</span>
                                </Link>

                            </li>
                            <li className="w-100">
                                <Link to="/viewUsers" className="nav-link px-0 py-1  text-secondary text-hover-white">
                                    <i className="fa-solid fa-list  custom-icon" title="View Users"></i>
                                    <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}> View</span>
                                </Link>
                            </li>
                        </ul>
                    </li><hr style={{ margin: '0px', color: 'white', width: '100%' }} />

                    {/* Employee Field */}
                    <li>
                        <Link to="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 py-1  align-middle ">
                            <i className="fs-4 bi bi-people-fill custom-icon" title="Staff"></i>
                            <span className={`custom-icon ms-1  ${isCollapsed ? 'd-none' : 'd-none d-sm-inline'}`}>Staff</span>
                        </Link>
                        <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/addEmployee" className="nav-link px-0 py-1  text-secondary text-hover-white">
                                    <i className="bi bi-person-fill-add custom-icon" title="Add Staff"></i>
                                    <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}> Add</span></Link>
                            </li>
                            <li className="w-100">
                                <Link to="/viewEmployee" className="nav-link px-0 py-1  text-secondary text-hover-white">
                                    <i className=" bi bi-person-lines-fill  custom-icon" title="View Staff"></i>
                                    <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}>View</span> </Link>
                            </li>
                        </ul>
                    </li><hr style={{ margin: '0px', color: 'white', width: '100%' }} />

                    {/* Attendance Fields */}
                    <li>
                        <Link to="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 py-1  align-middle">
                            <i className="fs-4 bi-table custom-icon custom-icon" title="Attendance"></i>
                            <span className={`custom-icon ms-1  ${isCollapsed ? 'd-none' : 'd-none d-sm-inline'}`}>Attendance</span>
                        </Link>
                        <ul className="collapse  nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/markAttendance" className="nav-link px-0 py-1  text-secondary text-hover-white">
                                    <i className="fas fa-calendar-check custom-icon" title="Mark Attendance"></i>
                                    <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}> Mark</span></Link>
                            </li>
                            <li className="w-100">
                                <Link to="/viewAttendance" className="nav-link px-0 py-1  text-secondary text-hover-white">
                                    <i className="fas fa-clipboard-list custom-icon" title="View Attendance"></i>
                                    <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}> View</span></Link>
                            </li>
                        </ul>
                    </li><hr style={{ margin: '0px', color: 'white', width: '100%' }} />

                    {/* Plans Fields */}
                    <li >
                        <Link to="#submenu4" data-bs-toggle="collapse" className="nav-link px-0 py-1  align-middle">
                            <i className="fs-4  bi-grid custom-icon" title="Plans"></i>
                            <span className={`custom-icon ms-1  ${isCollapsed ? 'd-none' : 'd-none d-sm-inline'}`}>Plans</span>
                        </Link>
                        <ul className="collapse  nav flex-column ms-1 custom-icon" id="submenu4" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/addPlan" className="nav-link px-0 py-1  text-secondary text-hover-white">
                                    <i className="fas fa-plus-circle custom-icon"title="Add Plans"></i>
                                    <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}> Add</span></Link>
                            </li>
                            <li className="w-100">
                                <Link to="/viewPlan" className="nav-link px-0 py-1  text-secondary text-hover-white">
                                    <i className="far fa-eye custom-icon"title="View Plans"></i>
                                    <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}> View</span></Link>
                            </li>
                            {/* <li className="w-100">
                                <Link to="/updatePlan" className="nav-link px-0 py-1  text-secondary text-hover-white">
                                    <i className="fas fa-edit" title="Update Plans"></i>
                                    <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}> Update</span></Link>
                            </li> */}
                        </ul>
                    </li><hr style={{ margin: '0px', color: 'white', width: '100%' }} />

                    {/* Membership Fields */}
                    <li>
                        <Link to="#submenu5" data-bs-toggle="collapse" className="nav-link px-0 py-1  align-middle">
                            <i className="bi bi-shield-fill-check fs-4 custom-icon"title="Membership"></i>
                            <span className={`custom-icon ms-1  ${isCollapsed ? 'd-none' : 'd-none d-sm-inline'}`}>Membership</span>
                        </Link>
                        <ul className="collapse  nav flex-column ms-1" id="submenu5" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/addMembership" className="nav-link px-0 py-1  text-secondary text-hover-white">
                                    <i className="bi bi-shield-plus custom-icon" title="Add Membership"></i>
                                    <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}> Add</span></Link>
                            </li>
                            <li className="w-100">
                                <Link to="/viewMemberships" className="nav-link px-0 py-1  text-secondary text-hover-white">
                                    <i className="bi bi-shield-exclamation custom-icon" title="View Membership"></i>
                                    <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}> View</span></Link>
                            </li>
                        </ul>
                    </li><hr style={{ margin: '0px', color: 'white', width: '100%' }} />
                    {/* Equipment Fields */}
                    <li>
                        <Link to="#submenu6" data-bs-toggle="collapse" className="nav-link px-0 py-1  align-middle">
                            {/* <i className="bi bi-shield-fill-check fs-4 custom-icon"title=""></i> */}
                            <i className="bi bi-gear-wide-connected fs-4 custom-icon"title="Equipments"></i>
                            <span className={`custom-icon ms-1  ${isCollapsed ? 'd-none' : 'd-none d-sm-inline'}`}>Equipments</span>
                        </Link>
                        <ul className="collapse  nav flex-column ms-1" id="submenu6" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/addEquipments" className="nav-link px-0 py-1  text-secondary text-hover-white">
                                    <i className="bi bi-patch-plus custom-icon"title="Add Equipments"></i>
                                    <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}> Add</span></Link>
                            </li>
                            <li className="w-100">
                                <Link to="/equpmentsDetails" className="nav-link px-0 py-1  text-secondary text-hover-white">
                                    <i className="bi bi-patch-exclamation custom-icon"title="View Equipments"></i>
                                    <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}> View</span></Link>
                            </li>
                        </ul>
                    </li><hr style={{ margin: '0px', color: 'white', width: '100%' }} />

                    {/* Activity Fields */}
                    <li>
                        <Link to="#submenu7" data-bs-toggle="collapse" className="nav-link px-0 py-1  align-middle">
                            {/* <i className="bi bi-shield-fill-check fs-4 custom-icon"title=""></i> */}
                            <i className="bi bi-activity fs-4 custom-icon"title="Activity"></i>
                            <span className={`custom-icon ms-1  ${isCollapsed ? 'd-none' : 'd-none d-sm-inline'}`}>Activity</span>
                        </Link>
                        <ul className="collapse  nav flex-column ms-1" id="submenu7" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/addActivity" className="nav-link px-0 py-1  text-secondary text-hover-white">
                                    <i className="bi bi-plus-lg custom-icon"title="Add Activity"></i>
                                    <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}> Add</span></Link>
                            </li>
                            <li className="w-100">
                                <Link to="/viewActivities" className="nav-link px-0 py-1  text-secondary text-hover-white">
                                    <i className="bi bi-list-nested custom-icon"title="View Activity"></i>
                                    <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}> View</span></Link>
                            </li>
                            <li className="w-100">
                                <Link to="/viewScheduleActivity" className="nav-link px-0 py-1  text-secondary text-hover-white">
                                    <i className="bi bi-list-nested custom-icon"title="View Activity Schedule"></i>
                                    <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}> View Schedule</span></Link>
                            </li>
                            <li className="w-100">
                                <Link to="/scheduleActivity" className="nav-link px-0 py-1  text-secondary text-hover-white">
                                    <i className="bi bi-list-nested custom-icon"title="Schedule Activity"></i>
                                    <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}> Schedule</span></Link>
                            </li>
                            <li className="w-100">
                                <Link to="/participation" className="nav-link px-0 py-1  text-secondary text-hover-white">
                                    <i className="bi bi-list-nested custom-icon"title="Activity Participation"></i>
                                    <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}>Participation</span></Link>
                            </li>
                            <li className="w-100">
                                <Link to="/viewParticipation" className="nav-link px-0 py-1  text-secondary text-hover-white">
                                    <i className="bi bi-list-nested custom-icon"title="View Participation"></i>
                                    <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}>View Participation</span></Link>
                            </li>
                        </ul>
                    </li><hr style={{ margin: '0px', color: 'white', width: '100%' }} />

                    {/* Diet Fields */}
                    <li>
                        <Link to="#submenu8" data-bs-toggle="collapse" className="nav-link px-0 py-1  align-middle">
                            {/* <i className="bi bi-shield-fill-check fs-4 custom-icon"title=""></i> */}
                            <i className="bi bi-gear-wide-connected fs-4 custom-icon"title="Diet"></i>
                            <span className={`custom-icon ms-1  ${isCollapsed ? 'd-none' : 'd-none d-sm-inline'}`}>Diet</span>
                        </Link>
                        <ul className="collapse  nav flex-column ms-1" id="submenu8" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link to="/addDiet" className="nav-link px-0 py-1  text-secondary text-hover-white">
                                    <i className="bi bi-patch-plus custom-icon" title="Add Diet"></i>
                                    <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}> Add</span></Link>
                            </li>
                            <li className="w-100">
                                <Link to="/viewDietPlans" className="nav-link px-0 py-1  text-secondary text-hover-white">
                                    <i className="bi bi-patch-exclamation custom-icon" title="View Diet"></i>
                                    <span className={isCollapsed ? 'd-none' : 'd-none d-sm-inline'}> View</span></Link>
                            </li>
                        </ul>
                    </li><hr style={{ margin: '0px', color: 'white', width: '100%' }} />

                    <li>
                        <Link to="/imageUploader" className="nav-link px-0 py-1  align-middle">
                            <i className="fs-4 bi-people custom-icon" title="Image Test"></i> <span className={`custom-icon ms-1  ${isCollapsed ? 'd-none' : 'd-none d-sm-inline'}`}>Image Test</span>
                        </Link>
                    </li><hr style={{ margin: '0px', color: 'white', width: '100%' }} />

                </>
            );
            break;
        case 'user':
            sidebarContent = (
                <>

                    <li className="nav-item">
                        <Link to="dashboard" className="nav-link align-middle px-0 py-1" >
                            <i className="fs-4 bi-house custom-icon " title="Home"></i>
                            <span className={`custom-icon ms-1  ${isCollapsed ? 'd-none' : 'd-none d-sm-inline'}`}>Home</span>
                        </Link>
                    </li>
                    <hr style={{ margin: '0px', color: 'white', width: '100%' }} />

                    {/* User Fields */}
                    <li>
                        {/* <Link to="/viewSingleUser" className="nav-link px-0 py-1  align-middle"> */}
                        <Link to="/profile" className="nav-link px-0 py-1  align-middle">
                            <i className="fs-4 bi bi-person custom-icon" title="Profile"></i>
                            <span className={`custom-icon ms-1  ${isCollapsed ? 'd-none' : 'd-none d-sm-inline'}`}>Profile</span>
                        </Link>
                    </li>
                    <hr style={{ margin: '0px', color: 'white', width: '100%' }} />

                    <li>
                        <Link to="/viewMembershipById" className="nav-link px-0 py-1  align-middle">
                            <i className="fs-4 bi bi-shield-check custom-icon" title="Membership"></i>
                            <span className={`custom-icon ms-1  ${isCollapsed ? 'd-none' : 'd-none d-sm-inline'}`}>Membership</span>
                        </Link>
                    </li>
                    <hr style={{ margin: '0px', color: 'white', width: '100%' }} />

                    <li>
                        <Link to="/attendanceByUserId" className="nav-link px-0 py-1  align-middle">
                            <i className="fs-4 bi-person-lines-fill custom-icon" title="Attendance"></i>
                            <span className={`custom-icon ms-1  ${isCollapsed ? 'd-none' : 'd-none d-sm-inline'}`}>Attendance</span>
                        </Link>
                    </li>
                    <hr style={{ margin: '0px', color: 'white', width: '100%' }} />

                    <li>
                        <Link to="/viewParticipationById" className="nav-link px-0 py-1  align-middle">
                            <i className="fs-4 bi-activity custom-icon" title="Activity"></i>
                            <span className={`custom-icon ms-1  ${isCollapsed ? 'd-none' : 'd-none d-sm-inline'}`}>Activity</span>
                        </Link>
                    </li>
                    <hr style={{ margin: '0px', color: 'white', width: '100%' }} />
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
        < >

            <div >
                <ConfirmationModal
                    show={showConfirmation}
                    onHide={cancelResetRole}
                    onConfirm={confirmResetRole}
                    message="Are you sure you want to Sign Out?"
                />
                <div className="container-fluid">
                    <div className="row flex-nowrap">
                        <div
                            className={`${!isCollapsed ? 'sidewidth' : ''} px-0 py-1  bg-black`}
                            style={isCollapsed ? { width: '50px' } : {}}
                        >
                            {/* <span className={`"custom-icon  ${isCollapsed ? 'd-none' : 'd-none d-sm-inline'} mx-1"`}>{reduxRole}</span> */}
                            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-1 text-white min-vh-100">
                               
                                    {isCollapsed ? <i className="custom-icon fs-4 bi bi-list" onClick={toggleSidebar} title="Open"></i> 
                                    : <i className="custom-icon fs-4 bi bi-caret-left-square-fill " onClick={toggleSidebar} title="Collapse"></i>}
                                
                                <Link to="/" className="d-flex align-items-center pb-1 mb-md-0 me-md-auto text-white text-decoration-none">
                                    <i className="custom-icon fs-4 bi bi-command" title="Menu"></i>
                                    <span className={`custom-icon ms-1  ${isCollapsed ? 'd-none' : 'd-none d-sm-inline'}`}> Menu</span>
                                </Link>
                                
                                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                    {sidebarContent}
                                </ul>
                                <hr className="dropdown-divider" />
                                <div className="dropdown pb-4">
                                    <Link to="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                        {/* <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle"/> */}
                                        <i className="bi bi-person-circle custom-icon" title={reduxRole}></i>
                                        <span className={`custom-icon  ${isCollapsed ? 'd-none' : 'd-none d-sm-inline'} mx-1`}>{reduxRole}</span>
                                    </Link>
                                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                        {/* <li><Link className="dropdown-item" to="/">New project...</Link></li> */}
                                        <li><Link className="dropdown-item" to="/">Home</Link></li>
                                        <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
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
        </>
    )
}
