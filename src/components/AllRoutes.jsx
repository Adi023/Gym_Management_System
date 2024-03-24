import React from 'react'
// import {BrowserRouter as Route,Router,Routes} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Member imports
import AddMember from './member/AddMember';
import UpdateMember from './member/UpdateMember';
import ViewMember from './member/ViewMember';
import ViewMemberById from './member/ViewMemberById';
import MemberLogin from './member/MemberLogin';
import Member from './Member'


//Admin imports
import AddAdmin from './admin/AddAdmin'
import AdminLogin from './admin/AdminLogin'
import UpdateAdmin from './admin/UpdateAdmin'
import ViewAdmin from './admin/ViewAdmin'
import Admin from './Admin'
import AdminDashBoard from './admin/AdminDashBoard';

//Other imports
import Header from './Header'
import Home from './Home'
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import UserLogin from './user/UserLogin';
import AddUser from './user/AddUser';
import ViewAllUsers from './user/ViewAllUsers';
import Login from './Login';

export default function AllRoutes() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            {/*Member Routes */}
            <Route path="AddMember" element={<AddMember></AddMember>}></Route>
            <Route path="Member" element={<Member></Member>}></Route>
            <Route path="UpdateMember" element={<UpdateMember></UpdateMember>}></Route>
            <Route path="ViewMember" element={<ViewMember></ViewMember>}></Route>
            <Route path="ViewMemberById" element={<ViewMemberById></ViewMemberById>}></Route>
            <Route path="MemberLogin" element={<MemberLogin></MemberLogin>}></Route>

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
            <Route path='/login' element={<Login></Login>}></Route>


          </Routes>
        </div>
      </Router>
    </>
  )
}
