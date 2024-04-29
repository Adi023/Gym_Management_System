import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  ErrorBoundary from '../ErrorBoundary'

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
import AddEmployee from './Staff/AddEmployee';
import ViewEmployee from './Staff/ViewEmployee';


export default function AllRoutes() {
  return (
    <>
        <div>
        {/* <Router> */}
        <ErrorBoundary>
          <Routes>

             {/* Error */}
             <Route path='/ErrorBoundary' element={<ErrorBoundary/>}></Route>
             <Route path='/ErrorPage' element={<ErrorPage/>}></Route>

            {/*Admin Routes*/}
            <Route path="Admin" element={<Admin></Admin>}></Route>
            <Route path="AddAdmin" element={<AddAdmin></AddAdmin>}></Route>
            <Route path="AdminLogin" element={<AdminLogin></AdminLogin>}></Route>
            <Route path="UpdateAdmin" element={<UpdateAdmin></UpdateAdmin>}></Route>
            <Route path="ViewAdmin" element={<ViewAdmin></ViewAdmin>}></Route>
            <Route path="AdminDashBoard" element={<AdminDashBoard></AdminDashBoard>}></Route>

            {/*Other Routes*/}
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="Header" element={<Header></Header>}></Route>
            <Route path="ContactUs" element={<ContactUs></ContactUs>}></Route>
            <Route path="AboutUs" element={<AboutUs></AboutUs>}></Route>

            {/*User Routes*/}
            <Route path="/userlogin" element={<UserLogin></UserLogin>}></Route>
            <Route path='/register' element={<AddUser></AddUser>}></Route>
            <Route path='/viewUsers' element={<ViewAllUsers></ViewAllUsers>}></Route>
            <Route path='/viewSingleUser' element={<ViewSingleUser></ViewSingleUser>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>

            {/* Attendance Routes */}
            <Route path='/attendance' element={<AttendanceHome></AttendanceHome>}></Route>
            <Route path='/weeklyAttendance' element={<WeeklyAttendance/>}></Route>
            <Route path='/markAttendance' element={<MarkAttendance/>}></Route>
            <Route path='/viewAttendance' element={<ViewAttendance/>}></Route>

            {/* Employee Routes */}
            <Route path='/addEmployee' element={<AddEmployee/>} ></Route>
            <Route path='/viewEmployee' element={<ViewEmployee/>} ></Route>

            {/* Helper Routes */}
           <Route path='/imageUploader' element={<ImageUploader/>}></Route>
            
          </Routes>
          </ErrorBoundary>
       {/* </Router> */}
        </div>
      
    </>
  )
}
