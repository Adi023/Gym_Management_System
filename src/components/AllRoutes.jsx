import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary'

import ErrorPage from './ErrorPage';

//Admin imports
import AddAdmin from './admin/AddAdmin'
import AdminLogin from './admin/AdminLogin'
import UpdateAdmin from './admin/UpdateAdmin'
import ViewAdmin from './admin/ViewAdmin'
import Admin from './Admin'
import AdminDashBoard from './admin/AdminDashBoard';

//Attendance imports
import AttendanceHome from './attendance/AttendanceHome';
import WeeklyAttendance from './attendance/WeeklyAttendance'
import MarkAttendance from './attendance/MarkAttendance'
import ViewAttendance from './attendance/ViewAttendance'


//Employee imports
import AddEmployee from './Employee/AddEmployee';
import ViewEmployee from './Employee/ViewEmployee';

//plan imports
import AddPlan from './plan/AddPlan'
import ViewPlan from './plan/ViewPlan'
import UpdatePlan from './plan/UpdatePlan'

//Other imports
import Header from './Header'
import Home from './Home'
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import UserLogin from './user/UserLogin';
import AddUser from './user/AddUser';
import ViewAllUsers from './user/ViewAllUsers';
import Login from './Login';
import Dashboard from './user/Dashboard';
import ViewSingleUser from './user/ViewSingleUser';
import ImageUploader from './ImageUploder';
import { useSelector } from 'react-redux';
import RequireAuth from './RequireAuth';




export default function AllRoutes() {

  const isAuthenticated = useSelector(state => state.role !== null && state.role !== 'default');
console.log(isAuthenticated+"  isAuthenticated 1")

  return (
    <>
      <div>
        {/* <Router> */}
        {/* <ErrorBoundary> */}


          <Routes>
            {/*Allowed to every one Routes*/}
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="Header" element={<Header></Header>}></Route>
            <Route path="ContactUs" element={<ContactUs></ContactUs>}></Route>
            <Route path="AboutUs" element={<AboutUs></AboutUs>}></Route>
            <Route path="/userlogin" element={<UserLogin></UserLogin>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>

            {/* Error */}
            <Route path='/ErrorBoundary' element={<ErrorBoundary />}></Route>
            <Route path='/ErrorPage' element={<ErrorPage />}></Route>
            <Route path="/unauthorized" element={<div>Unauthorized Access!</div>} />

            {/* Only for AUthenticated and autherized users */}
            {isAuthenticated ? (
              <>
                {/*Admin Routes*/}
                <Route path="/Admin" element={<RequireAuth component={Admin} requiredRoles={['admin']} />} />
                <Route path="register" element={<RequireAuth component={AddUser}  /> }  />

                {/* <Route path="Admin" element={<RequireAuth component={<Admin/>} requiredRoles={['admin']} />}  /> */}
                <Route path="AddAdmin" element={<RequireAuth component={AddAdmin} requiredRoles={['admin']} />}  />
                <Route path="AdminLogin" element={<RequireAuth component={AdminLogin} requiredRoles={['admin']} />}  />
                <Route path="UpdateAdmin" element={<RequireAuth component={UpdateAdmin} requiredRoles={['admin']} />}  />
                <Route path="ViewAdmin" element={<RequireAuth component={ViewAdmin} requiredRoles={['admin']} />}  />
                <Route path="AdminDashBoard" element={<RequireAuth component={AdminDashBoard} requiredRoles={['admin']} />}  />

                {/*User Routes*/}
                {/* <Route path='/register' element={<RequireAuth component={AddUser} requiredRoles={['admin']} />}  /> */}
                <Route path='/viewUsers' element={<RequireAuth component={ViewAllUsers} requiredRoles={['admin']} />}  />
                <Route path='/viewSingleUser' element={<RequireAuth component={ViewSingleUser} requiredRoles={['admin']} />}  />
                <Route path='/dashboard' element={<RequireAuth component={Dashboard} requiredRoles={['admin']} />}  />

                {/* Attendance Routes */}
                <Route path='attendance' element={<RequireAuth component={AttendanceHome} requiredRoles={['admin']} />}  />
                <Route path='weeklyAttendance' element={<RequireAuth component={WeeklyAttendance} requiredRoles={['admin']} />}  />
                <Route path='markAttendance' element={<RequireAuth component={MarkAttendance} requiredRoles={['admin']} />}  />
                <Route path='viewAttendance' element={<RequireAuth component={ViewAttendance} requiredRoles={['admin']} />}  />

                {/* Employee Routes */}
                <Route path='addEmployee' element={<RequireAuth component={AddEmployee}  requiredRoles={['admin']} />}  />
                <Route path='viewEmployee' element={<RequireAuth component={ViewEmployee}  requiredRoles={['admin']} />}  />

                {/* Plan Routes */}
                <Route path='addPlan' element={<RequireAuth component={AddPlan} requiredRoles={['admin']} />}  />
                <Route path='viewPlan' element={<RequireAuth component={ViewPlan} requiredRoles={['admin']} />}  />
                <Route path='updatePlan' element={<RequireAuth component={UpdatePlan} requiredRoles={['admin']} />}  />

                {/* Helper Routes */}
                <Route path='imageUploader' element={<RequireAuth component={ImageUploader} requiredRoles={['admin']} />}  />

              </>
            ) : (
              
              <Route path="/" element={<div>Unauthorized Access!</div>} />

            ) }

          </Routes>
        {/* </ErrorBoundary> */}
        {/* </Router> */}
      </div>
    </>
  )
}